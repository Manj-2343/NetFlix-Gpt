import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/UserSlice";
import { BACKGROUND_IMAGE, photoURL } from "../utils/constant";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const handleButtonClick = () => {
    //validate the form data
    const nameValue = name.current ? name.current.value : null;
    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    const message = checkValidData(emailValue, passwordValue);
    setErrorMessage(message);
    if (message) return;
    // signIn/Signup
    if (!isSignInForm) {
      //signup logic
      createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: nameValue,
            photoURL: photoURL,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
              navigate("/");
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      //signInLogic
      signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BACKGROUND_IMAGE} alt="netflix image" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center ">
        <form
          className="space-y-4 absolute login-form w-3/12 bg-black opacity-6 p-12 m-12  bg-opacity-70"
          action="#"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <h1 className="text-gray-50 font-medium text-2xl">
            {isSignInForm ? "SignIn" : "SignUp"}
          </h1>
          {!isSignInForm && (
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-white"
              >
                Your Name
              </label>

              <input
                ref={name}
                type="text"
                name="username"
                id="name"
                className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-3 "
                placeholder="Enter your name.."
                autoComplete="current-name"
              />
            </div>
          )}
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-white"
            >
              Your email
            </label>
            <input
              ref={email}
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-3 "
              placeholder="name@company.com"
              autoComplete="current-email"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-white"
            >
              Your password
            </label>
            <input
              ref={password}
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-3 "
              autoComplete="current-password"
            />
          </div>
          <div className="flex justify-between">
            <div className="flex items-start">
              {/* <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-red-300"
                />
              </div> */}
              {/* <label
                htmlFor="remember"
                className="ms-2 text-sm font-medium text-gray-50 "
              >
                Remember me
              </label> */}
            </div>
            {/* <a href="#" className="text-sm text-red-700 hover:underline ">
              Lost Password?
            </a> */}
          </div>
          <p className="text-red-600 font-semibold">{errorMessage}</p>
          <button
            type="submit"
            className="w-full text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
            onClick={handleButtonClick}
          >
            {isSignInForm ? "SignIn" : "SignUp"}
          </button>
          <div className="text-sm font-medium text-gray-50">
            {isSignInForm ? "Are you new to Netflix ?" : "Already Register"}

            <span className="inline-block ml-2">
              <a
                href="#"
                className="text-red-700 hover:underline"
                onClick={toggleSignInForm}
              >
                {isSignInForm ? "SignUp Now" : "SignIn"}
              </a>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
