const { Router } = require("express")

const anunciosRouter = require("./anuncios.routes")
const sessionRouter = require("./session.routes")

const router = Router()

router.use("/anuncios", anunciosRouter);
router.use("/session", sessionRouter);

module.exports = router