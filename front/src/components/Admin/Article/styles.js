import { styled } from "styled-components"

export const Container = styled.div`
    display: flex;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    color:  ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 25px;
    margin: 1em 0em;
    padding: 1em;
    justify-content: space-around;
    align-items: start;
    width: 80%;

    .title{
        font-size: 2em;
        background-color: transparent;
        color: ${({ theme }) => theme.COLORS.WHITE};
        width: auto;
    }
    .head{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    form{
        font-weight: bold;
        .title{
            font-size: 2em;
            border: ${({ theme }) => theme.COLORS.WHITE} 1px solid;
            border-radius: 25px;
        }
        .descrption{
            border: ${({ theme }) => theme.COLORS.WHITE} 1px solid;
            border-radius: 25px;
        }
    }
    .content{
        width: 100%;
    }
    .description{
        width: 100%;
        background-color: transparent;
        color: #FFF;
        font-size: 1.5em;
    }
    div.description{
        cursor: pointer;
    }
    .tags span{
        display: inline-block;
        color: ${({ colorTag }) => colorTag};
        font-size: 1.1em;
        background-color: ${({ colorTag }) => colorTag ? colorTag : '#31572c'};
        padding: 6px 23px 9px;
        border-radius: 70em;
        margin: 1em;
        margin-left: 0px;
        position: relative;
        text-transform: lowercase;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
    }
    .actions{
        display: flex;
        cursor: pointer;
        > svg{
            margin: 0.5em;
        }
    }
    @media screen and (max-width: 425px){
        width: 95%;
    }
    @media screen and (min-width: 1024px){
        width: 60%;
    }
`;
