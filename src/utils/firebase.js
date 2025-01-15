// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getAuth} from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeBcxpZeuF9ihJJH07TNoWPys7ogdsCDI",
  authDomain: "netflixapp-3f133.firebaseapp.com",
  projectId: "netflixapp-3f133",
  storageBucket: "netflixapp-3f133.firebasestorage.app",
  messagingSenderId: "466509506220",
  appId: "1:466509506220:web:a47604b32e63a6a147a109",
  measurementId: "G-TCLE6HV64Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
// export default app;