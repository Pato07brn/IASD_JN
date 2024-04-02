import { useState, useEffect } from "react";
import axios from "axios"
import { Container } from "./styles";

import { Header } from  "../../../components/Header";
import { Section } from "../../../components/Section";
import { ImgBack } from "../../../components/ImgBackGround";
import { Footer } from  "../../../components/Footer";

//Imagem de teste
import imgtest from "../../../assets/Fundo_Instagram.png";

export function Departamentos() {

    return (
        <Container>
            <Header />
            <Section className="anuncios-imgs">
                <h1>Departamentos</h1>
            </Section>
            <Section className="content">

            </Section>
            <Footer />
        </Container>
    )
}