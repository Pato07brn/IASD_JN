import styled from "styled-components";

export const Container = styled.div`
    .pure-material-button-text {
        position: relative;
        display: inline-block;
        box-sizing: border-box;
        border: none;
        border-radius: 4px;
        padding: 0 8px;
        min-width: 64px;
        height: 36px;
        vertical-align: middle;
        text-align: center;
        text-overflow: ellipsis;
        text-transform: uppercase;
        color: ${({theme}) => theme.COLORS.WHITE};
        background-color: transparent;
        font-size: 1em;
        font-weight: 500;
        line-height: 36px;
        overflow: hidden;
        outline: none;
        cursor: pointer;
    }

    .pure-material-button-text::-moz-focus-inner {
        border: none;
    }

    /* Overlay */
    .pure-material-button-text::before {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: currentColor;
        opacity: 0;
        transition: opacity 0.2s;
    }

    /* Ripple */
    .pure-material-button-text::after {
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        border-radius: 50%;
        padding: 50%;
        width: 32px;
        height: 32px;
        background-color: currentColor;
        opacity: 0;
        transform: translate(-50%, -50%) scale(1) ;
        transition: opacity 1s, transform 0.5s;
    }

    /* Hover, Focus */
    .pure-material-button-text:hover::before {
        opacity: 0.04;
    }

    .pure-material-button-text:focus::before {
        opacity: 0.12;
    }

    .pure-material-button-text:hover:focus::before {
        opacity: 0.16;
    }

    /* Active */
    .pure-material-button-text:active::after {
        opacity: 0.16;
        transform: translate(-50%, -50%) scale(0);
        transition: transform 0s;
    }

    /* Disabled */
    .pure-material-button-text:disabled {
        color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.38);
        background-color: transparent;
        cursor: initial;
    }

    .pure-material-button-text:disabled::before {
        opacity: 0;
    }

    .pure-material-button-text:disabled::after {
        opacity: 0;
    }
`