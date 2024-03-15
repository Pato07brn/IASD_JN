import { useState, useEffect } from "react";
import axios from "axios"
import { Container } from "./styles";

import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { ImgBack } from "../../components/ImgBackGround";
import { Footer } from "../../components/Footer";

//Imagem de teste
import imgtest from "../../assets/Fundo_Instagram.png";

export function Home() {
    const [ytLink, setYt] = useState({});

    useEffect(()=>{
        async function yt(){
            try {
                const response = await axios.get('https://cyzeq2nsqd.execute-api.us-east-1.amazonaws.com/yt/Teste-API');
                let linkOlde = String(response.data.videoLink);
                let linkNew = linkOlde.replace("https://www.youtube.com/watch?v=", "https://www.youtube.com/embed/")
                setYt(linkNew);
                console.log(linkOlde);
            } catch (error) {
                console.error("Não deu pra retornar o último vídeo do yt")
            }
        }
        yt();
    }, []);

    return (
        <Container>
            <Header />
            <Section className="anuncios-imgs">
                <ImgBack path={imgtest} title={"Anuncio 1"} />
                <ImgBack path={imgtest} title={"Anuncio 2"} />
                <ImgBack path={imgtest} title={"Anuncio 3"} />
                <ImgBack path={imgtest} title={"Anuncio 4"} />
            </Section>
            <Section className="content">
                {
                    ytLink && <iframe src={ytLink+"/embed"} scrolling="no"></iframe>
                }
                <iframe src="https://www.instagram.com/ministerio_jovem_jardim_novo/embed" ></iframe>
            </Section>
            <Footer />
        </Container>
    )
}