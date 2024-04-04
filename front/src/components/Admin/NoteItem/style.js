import { styled } from "styled-components";


export const Container = styled.div`
    margin: 10px 1px;
    display: flex;
    align-items: center;

    background-color: ${({theme, $isnew}) => $isnew ? "transparent": theme.COLORS.BACKGROUND_900};
    border-radius: 25px;
    padding: 12px;

    .button-add{
        color: ${({theme}) => theme.COLORS.DIROSET};
    }
    
    .button-remove{
        color: ${({theme}) => theme.COLORS.RED};
    }

    > input{
        font-size: 1.5em;
        color: ${({theme}) => theme.COLORS.WHITE};
        background-color: transparent;
        border: none;
        width: 100%;
    }

`;