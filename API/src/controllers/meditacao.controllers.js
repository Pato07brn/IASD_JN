require("../database/firebase")
const firebase = require("firebase-admin")
const appError = require("../utils/AppError")
const { Timestamp, FieldValue } = require("firebase-admin/firestore")
const { getAuth } = require("firebase-admin/auth")


const db = firebase.firestore()

class MeditacaoController {
  async index(req, res) {
    const response = await db.collection('meditacao').get();
    const show = response.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }))
    //Se der erro
    if (!show) throw new appError("Não foi possível receber as meditações do banco de dados");
    return res.status(200).json({ show });
  }
}

module.exports = MeditacaoController;