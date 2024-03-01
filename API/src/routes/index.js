const { Router } = require("express")

const anunciosRouter = require("./anuncios.routes")

const router = Router()

router.use("/anuncios", anunciosRouter)

module.exports = router