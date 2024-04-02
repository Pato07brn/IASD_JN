import { initializeApp } from "firebase/app";

const configFirebase = {
    apiKey: "AIzaSyAuLbaYA1V3C_JWa-oLQgGb7bTCQMdDNrQ",
    authDomain: "jardim-novo.firebaseapp.com",
    databaseURL: "https://jardim-novo-default-rtdb.firebaseio.com",
    projectId: "jardim-novo",
    storageBucket: "jardim-novo.appspot.com",
    messagingSenderId: "1067822372341",
    appId: "1:1067822372341:web:fa160e2e29ad12076f3cbc",
    measurementId: "G-9H7VRDJKBM"
}

export const app = initializeApp(configFirebase);