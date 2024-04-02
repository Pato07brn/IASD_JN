const { Router } = require("express");
const SessionControllerClass = require("../controllers/session.controllers");
const SessionController = new SessionControllerClass();
const verifyToken = require("../middlewares/authEnsure")

const sessionRouter = Router()

sessionRouter.post("/", verifyToken, SessionController.index)

module.exports = sessionRouter