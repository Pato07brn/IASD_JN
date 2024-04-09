require("../database/firebase")
const firebase = require("firebase-admin")
const appError = require("../utils/AppError")
const { Timestamp, FieldValue } = require("firebase-admin/firestore")
const { getAuth } = require("firebase-admin/auth")


const db = firebase.firestore()

class LicaoController {
  async index(req, res) {
    const response = await db.collection('licao').get();
    const show = response.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }))
    //Se der erro
    if (!show) throw new appError("Não foi possível receber as lições do banco de dados");
    return res.status(200).json({ show });
  }
}

module.exports = LicaoController;