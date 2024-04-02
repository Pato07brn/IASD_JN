import styled from "styled-components";

export const Container = styled.section`    
    font-size: 1.6em;

    color: ${({ theme }) => theme.COLORS.WHITE};

    .imagem-com-sobreposicao {
        border-radius: 25px;
        position: relative;
        width: 300px;
        transition: 500ms; 
    }

    .imagem-com-sobreposicao:hover img{
        filter: brightness(0.5) ;
        transition: 500ms; 
    }

    .imagem-com-sobreposicao img {
        border-radius: 25px;
        border: #fff 2px solid;
        width: 100%;
        height: auto;
    }

    .texto-sobreposto {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100%;
        transform: translate(-50%, -50%);
        opacity: 0;
        color: ${({theme}) => theme.COLORS.WHITE}; 
        padding: 10px;
        text-align: center;
        transition: opacity 0.3s ease; 
    }

    .imagem-com-sobreposicao:hover .texto-sobreposto {
        opacity: 1;
    }


    @media screen and (max-width: 650px) {   
        font-size: 2.6em; 
    }
`