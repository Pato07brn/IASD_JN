import { useState, useEffect } from "react"
import { RxHamburgerMenu } from "react-icons/rx";

import { Container } from "./styles"
import img_logo from "../../assets/logo-iasd-preto.svg"
import img_salvemos from "../../assets/Salvemos-ct.png";
import bg_nvabar from "../../assets/bg_navbar.png"


export function Header() {
    
    const [width, setWidth] = useState(window.innerWidth);
    function upWidht() { setWidth(window.innerWidth) }
    window.addEventListener('resize', upWidht);
    useEffect(() => {
        upWidht();
        return
    }, [])
    
    const [leftPosition, setLeftPosition] = useState("-100vw")
    function navBar() {
        if (leftPosition == 0) {
            setLeftPosition("-100vw");
            return
        }
        setLeftPosition(0);
        return
    }
    const styleNav = {
        left: leftPosition
    }


    return (
        <Container>
            <main>
                {
                    width < 680 ? (
                        <button onClick={navBar}>
                            <RxHamburgerMenu size={45} />
                            <span className="sr-only">Abrir menu</span>
                        </button>
                    ) : (<></>)
                }
                <img className="salvemos" src={img_salvemos} alt="" />
                <span>
                    <div className="flex">
                        <div>
                            <img src={img_logo} />
                        </div>
                        <div className="logo">
                            <h2>IASD</h2>
                            <h2>JARDIM NOVO</h2>
                        </div>
                    </div>
                </span>
                {
                    width < 680 ? (
                        <div className="menu" style={styleNav}>
                            <button onClick={navBar}>
                                <RxHamburgerMenu color="white" size={45} />
                                <span className="sr-only">Fechar menu</span>
                            </button>
                            <li>Anúncios</li>
                            <li>Departamentos</li>
                            <li>Meditação</li>
                            <li>Lição</li>
                            <li>Fotos</li>
                        </div>
                    ) : (
                        <ul>
                            <li>Anúncios</li>
                            <li>Departamentos</li>
                            <li>Meditação</li>
                            <li>Lição</li>
                            <li>Fotos</li>
                        </ul>
                    )
                }
            </main>
        </Container>
    )
}