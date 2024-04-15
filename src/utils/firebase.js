// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPx6_bbaKQa_X3hg_4JyukCkyoLCOAV3c",
  authDomain: "netflixgpt-45c32.firebaseapp.com",
  projectId: "netflixgpt-45c32",
  storageBucket: "netflixgpt-45c32.appspot.com",
  messagingSenderId: "364787971796",
  appId: "1:364787971796:web:01aef809f2546e12a4ed41",
  measurementId: "G-H1V1WW6RXW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 export const auth = getAuth();