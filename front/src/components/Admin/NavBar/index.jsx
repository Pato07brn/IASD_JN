import { UseAcess } from "../../../hooks/acess";

import { LuMenu } from "react-icons/lu";
import { Container } from "./styles";
import { ButtonText } from "../../ButtonText"
import { Brand } from "../Brand";


export function NavBar() {
    const { updateAcess, navBar, setNavBar } = UseAcess();

    function handlerNavbar() {
        setNavBar(false);
    }

    return (
        <Container $navBar={navBar}>
            <main>
                <div className="brand">
                    <Brand handler={() => { handlerNavbar() }}/>
                </div>
                <ul className="actions">
                    <ButtonText title={"Anúncio"} onClick={() => updateAcess("Anúncio")} />
                    <ButtonText title={"Meditação"} onClick={() => updateAcess("Meditação")} />
                    <ButtonText title={"Lição"} onClick={() => updateAcess("Lição")} />
                </ul>

            </main>
        </Container>
    )
}