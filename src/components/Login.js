import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/3417bf9a-0323-4480-84ee-e1cb2ff0966b/IN-en-20240408-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="netflix image"
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center ">
        <form
          className="space-y-4 absolute login-form w-3/12 bg-black opacity-6 p-12 m-12  bg-opacity-70"
          action="#"
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
                type="text"
                name="username"
                id="name"
                className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-3 "
                placeholder="Enter your name.."
                required
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
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-3 "
              placeholder="name@company.com"
              required
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
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-3 "
              required
            />
          </div>
          <div className="flex justify-between">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-red-300 "
                  required
                />
              </div>
              <label
                htmlFor="remember"
                className="ms-2 text-sm font-medium text-gray-50 "
              >
                Remember me
              </label>
            </div>
            <a href="#" className="text-sm text-red-700 hover:underline ">
              Lost Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
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
