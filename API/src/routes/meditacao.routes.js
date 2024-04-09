const { Router } = require("express");
const verifyToken = require("../middlewares/authEnsure");

const MeditacaoControllerClass = require("../controllers/meditacao.controllers");
const MeditacaoController = new MeditacaoControllerClass();

const MeditacaoRouter = Router();

MeditacaoRouter.get("/", MeditacaoController.index);
//anunciosRouter.post("/", verifyToken, AnunciosController.create);
//anunciosRouter.delete("/:anuId", verifyToken, AnunciosController.delete);
//anunciosRouter.put("/", verifyToken, AnunciosController.update);
//anunciosRouter.patch("/", AnunciosController); 

module.exports = MeditacaoRouter;