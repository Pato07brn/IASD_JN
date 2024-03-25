import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";

import { CiLogout  } from "react-icons/ci";
import { LuMenu } from "react-icons/lu";

import { Container } from "./styles"

export function Header() {
    const usuario = "Teste";
    function menuHandler(){
        console.log('acessou');
    }

    return (
        <Container>
            <main>
                <div className="home-logo">
                    <LuMenu onClick={() => menuHandler()}/>
                    IASDJN
                </div>
                <div className="user">
                    Bem-vindo {usuario}
                </div>
                <div>
                    <CiLogout size={30}/>
                </div>
            </main>
        </Container>
    )
}