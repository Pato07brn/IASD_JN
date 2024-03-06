import { Container } from "./styles";


export function ImgBack({ title, path, link = "neida" }) {

    return (
        <Container>
            <div class="imagem-com-sobreposicao">
                <img src={path} alt="Imagem de anúncio" />
                <div class="texto-sobreposto">
                    {title}
                </div>
            </div>
        </Container>
    )
}