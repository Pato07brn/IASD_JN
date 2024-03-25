import { styled } from "styled-components";

export const Container = styled.nav`
    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    height: 100vh;
    grid-area: scrool;
    > main{
        img{
            height: 4.5em;
        }
    }
    .brand{
        display: flex;
        justify-content: center;
        border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
        height: 5em;
        padding: 3px;
    } 
    .actions{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`