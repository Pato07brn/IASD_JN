import { useState, useEffect } from "react";

import { useAuth } from "../../../hooks/auth";

import { CiLogout } from "react-icons/ci";
import { LuMenu } from "react-icons/lu";

import { Container } from "./styles"
import { api } from "../../../services/api";

export function Header() {

    const { SinOut } = useAuth()

    const [userName, setUserName] = useState("")

    async function menuHandler() {
        console.log('acessou');
    }
    
    useEffect(() => {
        async function getName() {
                const name = await api.post("/session");                
                setUserName(name.data.show[0].nome);
        }
        getName();
    }, [])


    return (
        <Container>
            <main>
                <div className="home-logo">
                    <LuMenu onClick={() => menuHandler()} />
                    IASDJN
                </div>
                <div className="user">
                    Bem-vindo: {userName}
                </div>
                <div>
                    <CiLogout size={30} onClick={SinOut} />
                </div>
            </main>
        </Container>
    )
}