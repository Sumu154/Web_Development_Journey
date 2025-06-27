// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMyJ2D30mbRM6LUQafeJnMBOKeMfXx3oA",
  authDomain: "email-pass-auth-321a2.firebaseapp.com",
  projectId: "email-pass-auth-321a2",
  storageBucket: "email-pass-auth-321a2.firebasestorage.app",
  messagingSenderId: "1018968420086",
  appId: "1:1018968420086:web:a584ab99cee9ad5672c6d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);