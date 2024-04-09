import { Container } from "./style"
import { LuMenu } from "react-icons/lu";
import logo from "../../../assets/logo-iasd-preto.svg";

function defaultHandler(){
    console.log('neida');
}

export function Brand({ handler = defaultHandler(), windowWidht = 800 }) {
    if(windowWidht <= 768){
        return (
            <Container>
                <LuMenu size={40} onClick={() => handler()}/>
            </Container>
        )
    }
    else{
        return (
            <Container>
                <LuMenu size={40} onClick={() => handler()}/>
                <img src={logo} alt="Logo IASD" />
                IASDJN
            </Container>
        )
    }
}