const { Router } = require("express");

const licaoRouter = require("./licao.routes");
const sessionRouter = require("./session.routes");
const anunciosRouter = require("./anuncios.routes");
const meditacaoRouter = require("./meditacao.routes");



const router = Router();

router.use("/licao", licaoRouter);
router.use("/session", sessionRouter);
router.use("/anuncios", anunciosRouter);
router.use("/meditacao", meditacaoRouter);

module.exports = router;