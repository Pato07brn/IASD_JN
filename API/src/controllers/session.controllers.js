require("../database/firebase")
const firebase = require("firebase-admin")
const appError = require("../utils/AppError")
const { getAuth } = require("firebase-admin/auth")

class Sessions {
    async create(req, res) {
        const { uid } = req.body;
        getAuth().getUser(uid)
            .then((userCredential) => {
                const user = userCredential;
                res.status(201).json(user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                throw new appError(errorMessage, errorCode)
            });
    }
}

module.exports = Sessions;