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
    const { title, description, tags } = req.body;
    const { id } = req.user;
    
    const snap = await db.collection('users').where("UID", "==", id).get();
    //Se não houver este usuário
    if (!snap.docs[0].id) throw new appError("Não foi possível cadastrar o anúncio no banco de dados");
  
    //Referência a coleção users
    const user_id = db.collection('users').doc(snap.docs[0].id)
    
    const newDoc = await db.collection('anuncios').add({
      id_user: user_id,
      autor: snap.docs[0].data().nome,
      title: title,
      tags: tags,
      description: description,
      create_at: FieldValue.serverTimestamp(),
      updated_at: FieldValue.serverTimestamp()
    });
    return res.status(201).json(newDoc);
  }

  async delete(req, res) {
    const { anuId } = req.params;
    const snap = await db.collection('anuncios').doc(anuId).get()

    if (!snap.data()) return res.status(200).json({ "ResponseText": "Anuncio não encontrado" });

    const delet = await db.collection('anuncios').doc(anuId).delete();
    
    return res.status(200).json({ "ResponseText": "Anuncio Deletado com sucesso" });
  }

  async update(req, res) {
    const { title, description, tags,  anuId } = req.body;

    const snap = await db.collection('anuncios').doc(anuId).get();

    if (!snap.data()) return res.status(200).json({ "ResponseText": "Anuncio não encontrado" });
    const dataUp = {
      title: title,
      description: description,
      tags: tags,
      updated_at: FieldValue.serverTimestamp()
    }
    const response = await db.collection('anuncios').doc(anuId).set(dataUp,{ merge: true });
    
    return res.status(202).json({ "ResponseText": "Anuncio atualizado com sucesso" });
  }
}

module.exports = AnunciosController;