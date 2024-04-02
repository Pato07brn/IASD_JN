import { styled } from "styled-components"

export const Container = styled.div`
    display: flex;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    color:  ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 25px;
    margin: 1em;
    padding: 1em;
    justify-content: space-around;
    align-items: center;

    .content{
        width: 70%;
    }
    .description{
        width: 100%;
    }
    .tags span{
        display: inline-block;
        color: ${({colorTag}) => colorTag};
        font-size: 1.1em;
        background-color: ${({colorTag}) => colorTag ? colorTag : '#31572c'};
        padding: 6px 23px 9px;
        border-radius: 70em;
        margin: 8px 6px 8px 0;
        margin-left: 0px;
        position: relative;
        text-transform: lowercase;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
    }
    .tags span{
        margin: 1em;
    }
`;
