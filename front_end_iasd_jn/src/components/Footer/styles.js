import styled from "styled-components";

export const Container = styled.footer`
    >main{
        position: absolute;
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;

        color: ${({ theme }) => theme.COLORS.WHITE};
        
        a{
            color: ${({ theme }) => theme.COLORS.GRAY_300};
        }
    }
    .info{
        width: auto;
        height: auto;
        display: grid;
        grid-template-columns: 50% 50%;
        justify-items: center;
        align-items: start;
        justify-content: space-around;
        text-shadow: 1px 1px #000;
        font-size: 1.2em;
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
        margin: 1em;
    }
    .copyright{
        margin: 1em;
        font-size: 0.8em;
    }
    @media screen and (max-width: 650px) {
        .info{
            grid-template-columns: 100%;
            font-size: 1em;
        }
        .social-links{
            width: 100%;
        }
    }
`