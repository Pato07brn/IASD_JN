import styled from "styled-components";

export const Container = styled.section`    
    font-size: 1.6em;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.WHITE};

    margin: 2em;
    color: ${({ theme }) => theme.COLORS.WHITE};
    text-shadow: 1px 1px #000;

    
    @media screen and (max-width: 650px) {   
        font-size: 1em; 
    }
`