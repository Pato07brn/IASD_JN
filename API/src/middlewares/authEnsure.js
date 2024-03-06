require("../database/firebase")
const firebase = require("firebase-admin")
const appError = require("../utils/AppError")
const { getAuth } = require("firebase-admin/auth")

async function verifyToken(req, res, next) {
    const authtoken = req.headers.authorization

    const [, token] = authtoken.split(" ");

    if (!token) throw new appError("Token não informado", 401)
    console.log(typeof token);


    getAuth().verifyIdToken(token)
        .then((decodedToken) => {
            const uid = decodedToken.uid;
            req.user = {
                id: String(token)
            }
            return next();
        })
        .catch((error) => {
            if (error) {
                res.status(402).json(error.data.message)
            }
            throw new appError("deu ruim", 401)
        });
}

module.exports = verifyToken;