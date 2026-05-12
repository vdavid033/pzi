// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0RBCVPGSFWXowg5tnoyX2C0lJgE1k87o",
  authDomain: "sirs-2026.firebaseapp.com",
  projectId: "sirs-2026",
  storageBucket: "sirs-2026.firebasestorage.app",
  messagingSenderId: "945897235788",
  appId: "1:945897235788:web:858cba4c4c963e42fc9be9",
  measurementId: "G-2R2L6ZDYGN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
