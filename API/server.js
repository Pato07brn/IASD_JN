// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuLbaYA1V3C_JWa-oLQgGb7bTCQMdDNrQ",
  authDomain: "jardim-novo.firebaseapp.com",
  databaseURL: "https://jardim-novo-default-rtdb.firebaseio.com",
  projectId: "jardim-novo",
  storageBucket: "jardim-novo.appspot.com",
  messagingSenderId: "1067822372341",
  appId: "1:1067822372341:web:fa160e2e29ad12076f3cbc",
  measurementId: "G-9H7VRDJKBM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);