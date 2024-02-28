import { styled } from "styled-components"

export const Container = styled.header`
    > main{
        
        margin: 0px 5.6em;
        > div{

            margin-top: 5.6em;
            margin-bottom: 5.6em;
            text-shadow: 1px 1px #000;
    
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            > span{
                    font-size: 1.6em;
                    display: flex;
                    align-items: center;
                    font-weight:700;
                    color: white;  
            }
        }
    }
    img{
        width: 3.6em;
    }

    ul{
        color: white;
        list-style: none;
        display: flex;
        justify-content: space-between;
        list-style: none;
    }
    
`