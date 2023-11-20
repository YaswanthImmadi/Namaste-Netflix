// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBTaLNY8VnGk-A7S0ev5xh8pe6QXGkQlY",
  authDomain: "my-app-60f5f.firebaseapp.com",
  projectId: "my-app-60f5f",
  storageBucket: "my-app-60f5f.appspot.com",
  messagingSenderId: "833634896387",
  appId: "1:833634896387:web:8120c0c197a37273915c36",
  measurementId: "G-4S987LLT35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();