import { Container } from "./styles"
import img from "../../assets/logo-iasd-preto.svg"

export function Header() {
    return (
        <Container>
            <main>
                <div>
                <span>
                    <img src={img} />
                    <h2>IASD<p>JARDIM NOVO</p></h2>
                </span>
                <span>
                    Salvemos os nossos
                </span>
                </div>
                <ul>
                    <li>Anúncios</li>
                    <li>Departamentos</li>
                    <li>Meditação</li>
                    <li>Lição</li>
                    <li>Fotos</li>
                </ul>
            </main>
        </Container>
    )
}