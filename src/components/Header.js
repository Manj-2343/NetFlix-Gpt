import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/UserSlice";
import { logoURL } from "../utils/constant";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
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
  return (
    <div className="absolute px-8 py-0 bg-gradient-to-b from-black z-10 w-full flex justify-between">
      <img src={logoURL} alt="Netflix-image" className="w-44" />
      {user && (
        <div className="flex p-6 m-3 gap-2">
          <img
            className="w-12 h-12 rounded-full"
            alt="userIcon"
            src={user?.photoURL}
          />
          <button
            onClick={handleSignOut}
            className="bg-red-600 hover:bg-red-700 text-white font-semibold px-2.5  rounded"
          >
            SignOut
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
