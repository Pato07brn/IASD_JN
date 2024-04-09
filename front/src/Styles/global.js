import { createGlobalStyle } from "styled-components";

import bg from "../assets/bg_navbar.png"

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
        //background: rgb(211,47,221);
        //background: linear-gradient(90deg, rgba(211,47,221,1) 25%, rgba(247,0,0,1) 50%, rgba(255,0,149,1) 75%);
    }
    button{
        background: none;
        border: none;
    }

`