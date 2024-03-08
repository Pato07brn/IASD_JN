import { Container } from "./styles";


export function ImgBack({ title, path, link = "neida" }) {

    return (
        <Container>
            <div className="imagem-com-sobreposicao">
                <img src={path} alt="Imagem de anúncio" />
                <div className="texto-sobreposto">
                    {title}
                </div>
            </div>
        </Container>
    )
}