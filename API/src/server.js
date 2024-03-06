require("express-async-errors")

const express = require("express")
const app = express();

const routes = require("./routes")
const appError = require("./utils/AppError")

app.use((error,req, res, next) =>{
    console.error(error)
    if(error instanceof appError){
        return res.status(error.statusCode).json({
            status: "error",
            message: error.message
        })
    }
    return res.status(500).json({
        status: "error",
        message: "Erro interno do servidor"
    })
})

app.use(express.json())
app.use(routes)

app.listen("8080", () => {
    console.log('Rodando Server');
})
