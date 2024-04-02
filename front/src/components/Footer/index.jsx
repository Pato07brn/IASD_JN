import { CiInstagram, CiYoutube } from "react-icons/ci";
import { PiChatCircleDots, PiEnvelopeLight } from "react-icons/pi";
import { TbBuildingChurch } from "react-icons/tb";

import { Container } from "./styles";

export function Footer() {
    return (
        <Container>
            <main>
                <div className="info">
                    <div>
                        <section>
                            <h3>
                                <p>Igreja Adventista do Sétimo Dia</p>
                                <p>Jardim Novo Realengo</p>
                            </h3>
                        </section>
                        <section className="conteudos-info">
                            <div><TbBuildingChurch /></div>
                            <div>
                                <p>Rua Angical, 105 - Jardim Novo - Realengo</p>
                                <p>Rio de Janeiro, RJ - CEP: 21760-130</p>
                            </div>
                        </section>
                        <section className="conteudos-info">
                            <PiEnvelopeLight />
                            <p>
                                iasdjardimnovo@gmail.com
                            </p>
                        </section>
                    </div>
                    <div>
                        <h3>Programação</h3>
                        <table >
                            <tbody>
                                <tr>
                                    <td>Sábado</td>
                                    <td>09h00 - Escola Sabatina</td>
                                </tr>
                                <tr>
                                    <td>Sábado</td>
                                    <td>10h30 - Culto Divino</td>
                                </tr>
                                <tr>
                                    <td>Domingo</td>
                                    <td>19h30 - Culto de Adoração</td>
                                </tr>
                                <tr>
                                    <td>Quarta-Feira</td>
                                    <td>19h30 - Culto de Oração</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="social-links">
                    <section>Social</section>
                    <section>
                        <a href="https://www.instagram.com/ministerio_jovem_jardim_novo/" target="_blank"><CiInstagram size={50} /></a>
                        <a href="https://www.youtube.com/@Iasdjardimnovo"><CiYoutube size={50} /></a>
                        <a href="#"><PiChatCircleDots size={50} /></a>
                    </section>
                </div>
                <div className="copyright">© 2024 Igreja Adventista do Sétimo Dia • Todos os direitos reservados</div>
            </main>
        </Container>
    )
}