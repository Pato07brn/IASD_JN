import styled from "styled-components";

export const Container = styled.section`
    .anuncios-imgs{
        padding: 1em 0em;
        display: grid;
        justify-items: center;
        justify-content: space-around;
        grid-template-columns: auto auto auto auto;
        row-gap: 1em;
    }
    .content{
        display: flex;
        gap: 25px;
        padding-bottom: 1em;
    }
    iframe{
        border-radius: 25px;
        width: 100%;
        height: 70vh;
    }
    @media screen and (max-width: 1340px){
        .anuncios-imgs{
            grid-template-columns: auto auto;
        } 
        .content{
            flex-direction: column;
        }
    }
    
    @media screen and (max-width: 720px){
        .anuncios-imgs{
            grid-template-columns: auto;
        } 
        iframe{
            height: 45vh;
        }
    }
`



