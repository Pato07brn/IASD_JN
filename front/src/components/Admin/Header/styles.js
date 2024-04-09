import { styled } from "styled-components";

export const Container = styled.header`
    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    width: 100%;
    > main{
        height: 5em;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0 2em;
    }
    .user{
        position: absolute;
        width: auto;
        left: 50%;
        font-size: 1.4em;
        transform: translate(-50%, 0)
    }
`