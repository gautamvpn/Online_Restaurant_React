// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQgQpODbj_IlbmtFE_988vetVMzCex_z4",
  authDomain: "foodordering-e67d7.firebaseapp.com",
  projectId: "foodordering-e67d7",
  storageBucket: "foodordering-e67d7.appspot.com",
  messagingSenderId: "177446533512",
  appId: "1:177446533512:web:6a6418b10ef5af10c2223d",
  measurementId: "G-DQD1933DQ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);