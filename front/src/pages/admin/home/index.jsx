import { AcessProvider } from "../../../hooks/acess";


import { Header } from "../../../components/Admin/Header";
import { Article } from "../../../components/Admin/Article";
import { Content } from "../../../components/Admin/Content";
import { Container } from "./styles";
import { Scroolbar } from "../../../components/Admin/Scroolbar";

export function Home() {
    
    return (
        <Container>
                <Scroolbar />
                <Header />
                <Content>
                </Content>
        </Container>
    )
}