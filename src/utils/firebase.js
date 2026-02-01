
import {  getAuth } from "firebase/auth"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2T9ENrCMeKkiaEDjtP5ccyLKbJCsyn8k",
  authDomain: "moviesgeneral-46067.firebaseapp.com",
  projectId: "moviesgeneral-46067",
  storageBucket: "moviesgeneral-46067.firebasestorage.app",
  messagingSenderId: "185867314318",
  appId: "1:185867314318:web:e9134be25f87419101d5df",
  measurementId: "G-2WT8WNHTNT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();