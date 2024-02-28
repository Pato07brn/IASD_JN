const firebaseConfig = require("./config/firebase.config")
const express = require("express")

const app = express();
// Initialize Firebase

app.get("/", function (req, res) {
    res.send(firebaseConfig)
})


app.listen("8080", () => {
    console.log('firebaseConfig');
})
