import { Container } from "./styles";

import { Header } from "../../../components/Admin/Header";
import { NavBar } from "../../../components/Admin/NavBar";
import { Content } from "../../../components/Admin/Content";

export function Home() {
    
    return (
        <Container>
                <NavBar />
                <Header />
                <Content />
        </Container>
    )
}