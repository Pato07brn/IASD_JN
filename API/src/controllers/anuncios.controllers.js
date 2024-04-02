require("../database/firebase")
const firebase = require("firebase-admin")
const appError = require("../utils/AppError")
const { Timestamp, FieldValue } = require("firebase-admin/firestore")
const { getAuth } = require("firebase-admin/auth")


const db = firebase.firestore()

class AnunciosController {

  async index(req, res) {
    const response = await db.collection('anuncios').get();
    const show = response.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }))
    //Se der erro
    if (!show) throw new appError("Não foi possível receber os anúncios do banco de dados");
    return res.status(200).json({ show });
  }

  async create(req, res) {
    const { autor, title, description } = req.body
    const snap = await db.collection('users').where("nome", "==", autor).get()
    //Se não houver este usuário
    if (!snap.docs[0].id) throw new appError("Não foi possível cadastrar o anúncio no banco de dados")
    const user_id = db.collection('users').doc(snap.docs[0].id)
    const newDoc = await db.collection('anuncios').add({
      autor: autor,
      title: title,
      id_user: user_id,
      description: description,
      create_at: FieldValue.serverTimestamp(),
      updated_at: FieldValue.serverTimestamp()
    });
    return res.status(201).json(newDoc);
  }

  async delete(req, res) {
    const { anuID } = req.body;
    const snap = await db.collection('anuncios').doc(anuID).get()

    if (!snap.data()) return res.status(200).json({ "ResponseText": "Anuncio não encontrado" });

    const delet = await db.collection('anuncios').doc(anuID).delete();
    return res.status(200).json({ "ResponseText": "Anuncio Deletado com sucesso" });
  }

  async update(req, res) {
    const { anuID, title, description } = req.body;
    const snap = await db.collection('anuncios').doc(anuID).get();

    if (!snap.data()) return res.status(200).json({ "ResponseText": "Anuncio não encontrado" });

    const dataUp = {
      title: title,
      description: description,
      updated_at: FieldValue.serverTimestamp()
    }

    const response = await db.collection('anuncios').doc(anuID).set(dataUp,{ merge: true });
    
    return res.status(202).json({ "ResponseText": "Anuncio atualizado com sucesso" });
  }
}

module.exports = AnunciosController;