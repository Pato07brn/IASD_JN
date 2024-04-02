const firebaseConfig = require("../config/firebase.config");
const firebase = require("firebase-admin")
// Initialize Firebase
const connection = firebase.initializeApp({
    credential: firebase.credential.cert(firebaseConfig),
    databaseURL: "https://jardim-novo-default-rtdb.firebaseio.com"
});

module.exports = connection