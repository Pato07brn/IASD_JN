import { useAuth } from "../../../hooks/auth"
import { AcessProvider, AcessContext } from "../../../hooks/acess";

import { Container } from "./styles";
import { Header } from "../../../components/Admin/Header";
import { Scroolbar } from "../../../components/Admin/Scroolbar"
import { Content } from "../../../components/Admin/Content"

export function Home() {
    return (
        <Container>
            <AcessProvider>
                <Scroolbar />
                <Header />
                <Content />
            </AcessProvider>
        </Container>
    )
}