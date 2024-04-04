const { Router } = require("express");
const verifyToken = require("../middlewares/authEnsure")

const AnunciosControllerClass = require("../controllers/anuncios.controllers");
const AnunciosController = new AnunciosControllerClass();

const anunciosRouter = Router()

anunciosRouter.get("/", AnunciosController.index);
anunciosRouter.post("/", verifyToken, AnunciosController.create);
anunciosRouter.delete("/:anuId", verifyToken, AnunciosController.delete);
anunciosRouter.put("/", verifyToken, AnunciosController.update);
/* anunciosRouter.patch("/", AnunciosController); */

module.exports = anunciosRouter