import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Lato", sans-serif;
        font-style: normal;
    }
    body{
        background: rgb(211,47,221);
        background: linear-gradient(90deg, rgba(211,47,221,1) 33%, rgba(219,165,165,1) 63%, rgba(255,0,149,1) 100%);
    }

`