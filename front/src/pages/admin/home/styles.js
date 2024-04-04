import {styled} from "styled-components"

export const Container = styled.main`
    background-color: transparent;
    height: 100vh;
    width: 100%;
    display: grid;
    grid-template-columns: auto 87%;
    grid-template-rows: 5em auto;
    grid-template-areas: 
        "scrool header" 
        "scrool content";
    >main{
        grid-area: content;
    }
`;
