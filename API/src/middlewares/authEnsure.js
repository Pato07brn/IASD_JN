require("../database/firebase")
const firebase = require("firebase-admin")
const appError = require("../utils/AppError")
const { getAuth } = require("firebase-admin/auth")

async function verifyToken(req, res, next) {
    const authtoken = req.headers.autorization;

    if (!authtoken) throw new appError("Token não informado", 402);

    await getAuth()
        .verifyIdToken(authtoken)
        .then((decodedToken) => {
            const uid = decodedToken.uid;
            req.user = {
                id: String(uid)
            };
            return next();
        })
        .catch((error) => {
            console.log(error.message);
            throw new appError("Token invalido", 402);
        });
}

module.exports = verifyToken;