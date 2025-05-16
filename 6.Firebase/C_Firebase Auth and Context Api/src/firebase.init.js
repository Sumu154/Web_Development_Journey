// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBmfGivCNZ6v_U6X7WbzO0c7uqCO1VKio",
  authDomain: "auth-and-context-api.firebaseapp.com",
  projectId: "auth-and-context-api",
  storageBucket: "auth-and-context-api.firebasestorage.app",
  messagingSenderId: "645704493125",
  appId: "1:645704493125:web:c44c44e7dedeac975a1b2c"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);