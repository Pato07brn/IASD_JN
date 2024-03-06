const { Router } = require("express");
const AnunciosControllerClass = require("../controllers/anuncios.controllers");
const AnunciosController = new AnunciosControllerClass();

const anunciosRouter = Router()

anunciosRouter.get("/", AnunciosController.index);
anunciosRouter.post("/", AnunciosController.create);
anunciosRouter.delete("/", AnunciosController.delete);
anunciosRouter.put("/", AnunciosController.update);
/* anunciosRouter.patch("/", AnunciosController); */

module.exports = anunciosRouter