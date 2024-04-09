const { Router } = require("express");
const verifyToken = require("../middlewares/authEnsure")

const LicaoControllerClass = require("../controllers/licao.controllers");
const LicaoController = new LicaoControllerClass();

const licaoRouter = Router()

licaoRouter.get("/", LicaoController.index);
//anunciosRouter.post("/", verifyToken, LicaoController.create);
//anunciosRouter.delete("/:anuId", verifyToken, LicaoController.delete);
//anunciosRouter.put("/", verifyToken, LicaoController.update);
//anunciosRouter.patch("/", AnunciosController);

module.exports = licaoRouter;