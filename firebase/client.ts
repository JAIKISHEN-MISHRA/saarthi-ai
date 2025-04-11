// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfUnbXLjgFG7cF9vlKfN_VbCrfWgB5BII",
  authDomain: "saarthi-c55f3.firebaseapp.com",
  projectId: "saarthi-c55f3",
  storageBucket: "saarthi-c55f3.firebasestorage.app",
  messagingSenderId: "1086203887297",
  appId: "1:1086203887297:web:fe262b7dfdf48f8d331e40",
  measurementId: "G-44TVGCKMJL"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);