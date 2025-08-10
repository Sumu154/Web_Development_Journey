// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhLNaASlUZJ457e9sS3LYWcx1NMm9lpfo",
  authDomain: "simple-firebase-c27e6.firebaseapp.com",
  projectId: "simple-firebase-c27e6",
  storageBucket: "simple-firebase-c27e6.firebasestorage.app",
  messagingSenderId: "322952678864",
  appId: "1:322952678864:web:6be9d3a09cc6238199bdd5",
  measurementId: "G-TLT4FQ8F30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);