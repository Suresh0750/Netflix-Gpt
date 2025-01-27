// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8VzhxtFH7vms33xWM7SvhKCj74sfaBps",
  authDomain: "netflixgpt-3ac80.firebaseapp.com",
  projectId: "netflixgpt-3ac80",
  storageBucket: "netflixgpt-3ac80.firebasestorage.app",
  messagingSenderId: "469878546794",
  appId: "1:469878546794:web:b5287f88fa18e412038513",
  measurementId: "G-GSVK5E6TFZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


// * auth for call everywhere

export const auth = getAuth();