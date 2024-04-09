import axios from "axios";

export const api = axios.create({
    //dev
    //baseURL: "http://localhost:8080"
    //prod
    baseURL: "https://iasd-jn.onrender.com"
})
