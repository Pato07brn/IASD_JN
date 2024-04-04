import { styled } from "styled-components";

export const Container = styled.nav`
    position: fixed;

    left: ${({ $navBar }) => $navBar ? "0" : "-40%"};
    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    height: 100vh;
    width: auto;
    transition: 500ms;
    z-index: 1;
    > main{
        img{
            height: 4.5em;
        }
    }
    .brand{
        display: flex;
        align-items: center;
        border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
        height: 5em;
        padding: 0 2em;
    } 
    .actions{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    @media screen and (max-width: 768px){
        left: ${({ $navBar }) => $navBar ? "0" : "-100%"};
    }
`