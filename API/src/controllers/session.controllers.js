require("../database/firebase");
const firebase = require("firebase-admin");
const appError = require("../utils/AppError");
const { getAuth } = require("firebase-admin/auth");

const db = firebase.firestore()

class Sessions {
    async index(req, res) {
        const idToken = req.user.id;

        const snap = await db.collection("users").where("UID", "==", idToken).get()
        const show = snap.docs.map((doc) => (
            doc.data()
        ));

        return res.status(202).json({ show });
    }

}

module.exports = Sessions;