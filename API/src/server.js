require("express-async-errors");
const express = require("express");
const cors = require("cors");

const appError = require("./utils/AppError")

const app = express();
const routes = require("./routes")

app.use(express.json());
app.use(cors());
app.use(routes);

app.use((error,req, res, next) =>{
    console.error(error);
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

app.listen("8080", () => {
    console.log('Rodando Server');
})
