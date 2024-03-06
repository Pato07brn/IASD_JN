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
    @media screen and (max-width: 1340px){
        .anuncios-imgs{
            grid-template-columns: auto auto;
        } 
    }
    
    @media screen and (max-width: 720px){
        .anuncios-imgs{
            grid-template-columns: auto;
        } 
    }
`



