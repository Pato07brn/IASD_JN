import {styled} from "styled-components"

export const Container = styled.main`
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Form = styled.form`
    width: 40em;
    height: 50%;
    padding: 0 2em;
    border-radius: 50px;
    background-color: ${({theme}) => theme.COLORS.BLUE};
    
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;

    > div{
        width: 100%;
    }

    h1{
        color: ${({theme}) => theme.COLORS.WHITE};
    }

    @media screen and (max-width: 720px) {
        width: 90%;
    }
`;