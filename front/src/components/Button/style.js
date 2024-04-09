import styled from "styled-components"

export const Container = styled.button`
    width: ${({width}) => width};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    background-color: ${({ theme, $bccolor }) => $bccolor ? $bccolor : theme.COLORS.RED2};
    color: ${({ theme }) => theme.COLORS.WHITE};

    padding: 0.6em;
    font-size: 1.6em;
    border-radius: 10px;
    margin-bottom: 8px;
`