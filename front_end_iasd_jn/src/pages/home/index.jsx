import { Container } from "./styles";

import { Header } from "../../components/Header"
import { Section } from "../../components/Section"
import { ImgBack } from "../../components/ImgBackGround"
import { Footer } from "../../components/Footer";

import imgtest from "../../assets/Fundo_Instagram.png"
export function Home() {
    return (
        <Container>
            <Header />
            <Section className="anuncios-imgs">
                <ImgBack path={imgtest} title={"Anuncio 1"} />
                <ImgBack path={imgtest} title={"Anuncio 2"} />
                <ImgBack path={imgtest} title={"Anuncio 3"} />
                <ImgBack path={imgtest} title={"Anuncio 4"} />
            </Section>
            <Section>
                <h1>Texto de teste</h1>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, officiis reiciendis consequatur ipsam ullam corporis sed non similique, nihil amet, quia saepe quisquam officia voluptas! Tempore eum minus possimus nemo.</span>
            </Section>
            <Footer />
        </Container>
    )
}