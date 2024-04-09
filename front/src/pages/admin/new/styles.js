import { styled } from "styled-components"

export const Container = styled.main`
    background-color: transparent;
    height: 90vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .form {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        gap: 10px;
        width: 50vw;
        height: 70vh;
        padding: 20px;
        border-radius: 20px;
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
        color: #fff;
        border: 1px solid #333;
    }

    .title {
        font-size: 1em;
        font-weight: 600;
        display: flex;
        align-items: center;
        color: ${({theme}) => theme.COLORS.WHITE};
        > h1{
            font-size: 2em;
            width: 100%;
        }
    }

    .marcadores{
        > h2{
            padding: 7px 12px;
        }
    }

    @media screen and (max-width: 1024px){
        .form{
            width: 80vw;
        }
    }
    @media screen and (max-width: 425px){
        .form{
            width: 95vw;
        }
        .title{
            > h1{
                font-size: 1.6em;
            }
        }
    }

`;