const firebase = require("firebase-admin")
const { Timestamp, FieldValue } = require("firebase-admin/firestore")
require("../database/firebase")

const db = firebase.firestore()

class AnunciosController {
  async index(req, res) {
    const response = await db.collection('anuncios').get();
    const show = response.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }))
    return res.send({ show })
  }
  async create(req, res) {
    const { autor, title, description } = req.body
    const snap = await db.collection('users').where("nome", "==", autor).get()
    const user_id = db.collection('users').doc(snap.docs[0].id)
    const newDoc = await db.collection('anuncios').add({
      autor: autor,
      title: title,
      id_user: user_id,
      description: description,
      create_at: FieldValue.serverTimestamp(),
      updated_at: FieldValue.serverTimestamp()
    });
    return res.status(200).json(newDoc);
  }
  async delete(req, res) {
    const snap = await db.collection('anuncios').where("title", "==", "Agora foi").get()
    let id_doc = null
    if(!snap.docs[0]){
      return res.status(200).json({"ResponseText": "Deu ruim"});
    } else{
      id_doc = snap.docs[0].id
    }
    const delet = await db.collection('anuncios').doc(id_doc).delete();
    return res.status(200).json(id_doc);
  }
  async update(req, res) {

  }
}

module.exports = AnunciosController