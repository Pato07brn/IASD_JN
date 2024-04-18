import { styled } from "styled-components"

export const Container = styled.div`
    position: fixed;
    background-color: rgba(0,0,0,0.4);
    color: ${({theme}) => theme.COLORS.WHITE};
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex; 
    justify-content: center;
    align-items: center;
    font-size: 4.5em;
`