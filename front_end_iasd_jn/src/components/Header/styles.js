import { styled } from "styled-components";
import bg_nvabar from "../../assets/bg_navbar.png"
 
export const Container = styled.header`
    > main{
        margin: 0px 5.6em;
        > span{
            font-size: 1.6em;
            margin-top: 2em;
            margin-bottom: 3em;
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-weight: 700;
            color: ${({ theme }) => theme.COLORS.WHITE};
        }
        > button{
            position: absolute;
            top: 15px;
            left: 15px;
        }
        img{
            width: 3.6em;
        }
    }

    ul{
        font-size: 1.2em;
        text-shadow: 1px 1px #000;
        color: ${({ theme }) => theme.COLORS.WHITE};
        list-style: none;
        display: flex;
        justify-content: space-between;
        list-style: none;
        li{
            cursor: pointer;
        }
    }

    .flex{
        display: flex;
        align-items: center;
        gap: 1em;
    }
    .sr-only{
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border-width: 0;
    }
    .salvemos{
        position: absolute;
        top: 20px;
        right: 20px;
        width: 6.5em;
    }
    .logo{
        >h2{
            font-size: 1.5em;
            text-shadow: 1px 1px #000;
        }
    }
    .menu{
        height: 100vh;
        width: 100vw;
        position: absolute;
        top: 0;
        background-image: url(${bg_nvabar});
        color: ${({ theme }) => theme.COLORS.WHITE};
        transition: all 500ms;
        z-index: 1;

        button{
            position: relative;
            top: 15px;
            left: 15px;
            margin-bottom: 15px;
        }

        list-style: none;
        li{
            font-size: 2em;
            margin: 1em;
            border-bottom: solid 2px ${({ theme }) => theme.COLORS.BACKGROUND_700};
        }
    }
    @media screen and (max-width: 650px) {
        .salvemos{
            top: 15px;
            right: 15px;
            width: 6.5em;
        }
        .flex{
            gap: 0.5em;
        }
        >main{
            margin: 1em 0em 1em 2em;
            img{
                width: 3em;
            }
            >span{
                margin-top: 3em;
            }
        }
        .logo{
            >h2{
                font-size: 1em;
            }
        }
    }
`