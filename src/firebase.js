// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// import { getAnalytics } from "firebase/analytics";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// APIKEY = "AIzaSyCodpfzRHV2P5gc-gjWmMeVu5ebov6quQA",
//AIzaSyAkkha0N218wE1WBSFRqspdR6lHUqbTKqY
//process.env.EDS_APP_FIREBASE_KEY
const firebaseConfig = {
  apiKey: "AIzaSyCodpfzRHV2P5gc-gjWmMeVu5ebov6quQA",
  authDomain: "skripsieds.firebaseapp.com",
  projectId: "skripsieds",
  storageBucket: "skripsieds.appspot.com",
  messagingSenderId: "875984137412",
  appId: "1:875984137412:web:1e600927c73ea3bd4eed91",
  // measurementId: "G-4NES7YB53P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);