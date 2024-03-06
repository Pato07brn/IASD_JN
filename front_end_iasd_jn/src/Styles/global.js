import { createGlobalStyle } from "styled-components";
import bg from "../assets/Salvemos-2.png"

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Lato", sans-serif;
        font-style: normal;
    }
    body{
        background: #ffffff url(${bg}) center center/cover no-repeat fixed;
    }
    button{
        background: none;
        border: none;
    }

`