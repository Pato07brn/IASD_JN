import { styled } from "styled-components";

export const Container = styled.header`
    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    grid-area: header;
    width: 100%;
    > main{
        height: 5em;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0 2em;
    }
    .home-logo{
        font-size: 1.6em;
        display: flex;
        align-items: center;
        gap: 1em;
    } 
    .home-logo img{
        width: 2.5em;
    }
    .user{
        font-size: 1.4em;
    }
`