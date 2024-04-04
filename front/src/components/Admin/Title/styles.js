import styled from "styled-components";

export const Container = styled.section`    
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.WHITE};

    margin-top: 2em;
    padding-bottom: 5px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    text-shadow: 1px 1px #000;

    >h1{
        font-size: ${({ size }) => size};
    }

    @media screen and (max-width: 650px) {   
        font-size: 1em; 
    }
`