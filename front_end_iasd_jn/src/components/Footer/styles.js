import styled from "styled-components";

export const Container = styled.footer`
    >main{
        position: absolute;
        bottom: 0;
        max-height: 30vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100vw;

        color: ${({ theme }) => theme.COLORS.WHITE};
        
        a{
            color: ${({ theme }) => theme.COLORS.GRAY_300};
        }
    }
    .info{
        width: 80vh;
        max-height: 30vh;
        display: grid;
        grid-template-columns: 50% 50%;
        justify-items: center;
        align-items: start;
        justify-content: space-around;
        h3{
            margin: 1em;
        }
    }
    .conteudos-info{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        svg{
            font-size: 3.5em;
        }
    }
    .social-links{
        width: 35vw;
        font-size: 2em;
        color: ${({ theme }) => theme.COLORS.GRAY_300};
        background-color: #F6E7D8;
        border-radius:50px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .copyright{
        font-size: 0.8em;
    }
    @media screen and (max-width: 650px) {
        display: grid;
        grid-template-columns: 100%;
    }
`