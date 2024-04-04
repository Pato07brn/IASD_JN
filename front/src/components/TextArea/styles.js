import styled from "styled-components";

export const Container = styled.textarea`    
    font-size: 1.3em;
    height: 140px;
    width: 100%;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    padding: 12px;
    border-radius: 10px;
    resize: none;
    border: none;

    &::placeholder{
        color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
`