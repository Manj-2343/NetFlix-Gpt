import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/UserSlice";
import { logoURL } from "../utils/constant";
import { toggleGPTSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGE } from "../utils/languageConstant";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    // unSubscribe when the component will  unmount
    return () => unSubscribe();
  }, []);
  const handleGPTSearch = () => {
    //Toggle GPT SEARCH PAGE
    dispatch(toggleGPTSearchView());
  };
  const handleLanguageChange = (event) => {
    console.log(event.target.value);
    dispatch(changeLanguage(event.target.value));
  };
  return (
    <div className="absolute px-8 py-0 bg-gradient-to-b from-black z-10 w-full flex justify-between">
      <img src={logoURL} alt="Netflix-image" className="w-44" />
      {user && (
        <div className="flex  p-6 m-3 gap-3">
          {showGptSearch && (
            <form className="max-w-sm mx-auto">
              <select
                id="countries"
                className="bg-black border border-gray-300 text-gray-50 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 opacity-60"
                onChange={handleLanguageChange}
              >
                <option selected>Choose a language</option>
                {SUPPORTED_LANGUAGE.map((lang) => (
                  <option value={lang.identifier} key={lang.identifier}>
                    {lang.name}
                  </option>
                ))}
              </select>
            </form>
          )}
          <button
            onClick={handleGPTSearch}
            className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded opacity-40 max-w-sm"
          >
            {showGptSearch ? "HomePage" : "GPTSearch"}
          </button>
          <img
            className="w-12 h-12 rounded-full"
            alt="userIcon"
            src={user?.photoURL}
          />
          <button
            onClick={handleSignOut}
            className="bg-red-600 hover:bg-red-700 text-white font-bold px-2.5  rounded opacity-60 max-w-sm"
          >
            SignOut
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
