import { Header } from "../../../components/Admin/Header";
import { Content } from "../../../components/Admin/Content";
import { Container } from "./styles";
import { NavBar } from "../../../components/Admin/NavBar";

export function Home() {
    
    return (
        <Container>
                <NavBar />
                <Header />
                <Content>
                </Content>
        </Container>
    )
}