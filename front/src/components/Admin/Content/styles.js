import { styled } from "styled-components"

export const Container = styled.div`
    overflow-y: auto;
    > main {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    nav{     
        display: flex;
        align-items: center;
        flex-direction: row;
        color: ${({ theme }) => theme.COLORS.WHITE};
        margin: 1em;
        justify-content: space-between;
        > div{
            font-size: 1.5em;
            border-radius: 10px;
            padding: 10px;
            background-color: ${({ theme }) => theme.COLORS.GRAY_300};
        }
    }
    @media screen and (max-width: 425px){
        nav{
            > div{
                margin: 10px;
                font-size: 1.5em;
            }
        }
    }

`;
