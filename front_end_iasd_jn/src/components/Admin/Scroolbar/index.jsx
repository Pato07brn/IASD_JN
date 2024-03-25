import { useState, useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom";

import { AcessContext } from "../../../hooks/acess";

import { CiLogout } from "react-icons/ci";

import { Container } from "./styles";
import { ButtonText } from "../../ButtonText"
import { Anuncios } from "../../../pages/app/anuncios";
import logo from "../../../assets/logo-iasd-preto.svg";


export function Scroolbar() {
    const { bd, updateAcess } = useContext(AcessContext);
    const usuario = "Teste";

    return (
        <Container>
            <main>
                <div className="brand">
                    <img src={logo} alt="Logo IASD" />
                </div>
                <ul className="actions">
                    <ButtonText title={"Anúncios"}      onClick={()=>updateAcess("Anúncios")}/>
                    <ButtonText title={"Departamentos"} onClick={()=>updateAcess("Departamentos")}/>
                    <ButtonText title={"Meditação"}     onClick={()=>updateAcess("Meditação")}/>
                    <ButtonText title={"Lição"}         onClick={()=>updateAcess("Lição")}/>
                    <ButtonText title={"Fotos"}         onClick={()=>updateAcess("Fotos")}/>
                </ul>

            </main>
        </Container>
    )
}