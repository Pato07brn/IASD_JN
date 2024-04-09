import { api } from "../../../services/api";
import { useAuth } from "../../../hooks/auth";
import { UseAcess } from "../../../hooks/acess";
import { useState, useEffect } from "react";

import { Brand } from "../Brand";
import { CiLogout } from "react-icons/ci";
import { Container } from "./styles";

export function Header() {
    const { setNavBar } = UseAcess();
<<<<<<< HEAD
    const { SinOut } = useAuth();
=======
    const { SignOut } = useAuth();
>>>>>>> 6315f303a84becda09185a576fd0a7ae47e2b2a9
    const [userName, setUserName] = useState("");

    const [width, setWidth] = useState(window.innerWidth);
    function upWidht() { setWidth(window.innerWidth) }
    window.addEventListener('resize', upWidht);
<<<<<<< HEAD
    
=======

    useEffect(() => {
        upWidht();
        console.log(width);
        return
    }, [])

    async function menuHandler() {
        setNavBar(true);
    }

>>>>>>> 6315f303a84becda09185a576fd0a7ae47e2b2a9
    useEffect(() => {
        upWidht();
        console.log(width);
        return
    }, [])

    async function menuHandler() {
        setNavBar(true);
    }

    useEffect(() => {
        async function getName() {
            const name = await api.post("/session");
<<<<<<< HEAD
            setUserName(name.data.show[0].nome);
            if (!name) {
                SinOut();
            }
=======
            name.status == 200 ? setUserName(name.data.show[0].nome) : SignOut();
>>>>>>> 6315f303a84becda09185a576fd0a7ae47e2b2a9
        }
        getName();
    }, []);


    return (
        <Container>
            <main>
                <Brand windowWidht={width} handler={() => menuHandler()} />
                <div className="user">
                    Bem-vindo: {userName}
                </div>
                <div>
                    <CiLogout size={30} onClick={SignOut} />
                </div>
            </main>
        </Container>
    );
}
