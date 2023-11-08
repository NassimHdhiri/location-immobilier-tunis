// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1ssp9FECnkHqAFSKiCQfNOoZuJrRikoI",
  authDomain: "karyatn-c7109.firebaseapp.com",
  projectId: "karyatn-c7109",
  storageBucket: "karyatn-c7109.appspot.com",
  messagingSenderId: "576758673596",
  appId: "1:576758673596:web:06148f1f49a9a5c6a160b9",
  measurementId: "G-1RQZFPSZHD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth(app);