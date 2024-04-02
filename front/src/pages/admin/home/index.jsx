import { AcessProvider } from "../../../hooks/acess";


import { Container } from "./styles";
import { Header } from "../../../components/Admin/Header";
import { Article } from "../../../components/Admin/Article";
import { Scroolbar } from "../../../components/Admin/Scroolbar"
import { Content } from "../../../components/Admin/Content"

export function Home() {
    return (
        <Container>
            <AcessProvider>
                <Scroolbar />
                <Header />
                <Content>
                       <Article title={"Anúncio 1"} tags={['Bope', 'DBV', 'Saúde']} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi numquam, dolorum quasi labore repellat reiciendis autem. Sapiente dignissimos voluptas sunt nostrum ullam pariatur, eius vero voluptate veniam tenetur tempore sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi numquam, dolorum quasi labore repellat reiciendis autem. Sapiente dignissimos voluptas sunt nostrum ullam pariatur, eius vero voluptate veniam tenetur tempore sequi."}/>
                       <Article title={"Anúncio 2"} tags={['Bope', 'DBV', 'Saúde']} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi numquam, dolorum quasi labore repellat reiciendis autem. Sapiente dignissimos voluptas sunt nostrum ullam pariatur, eius vero voluptate veniam tenetur tempore sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi numquam, dolorum quasi labore repellat reiciendis autem. Sapiente dignissimos voluptas sunt nostrum ullam pariatur, eius vero voluptate veniam tenetur tempore sequi."}/>
                       <Article title={"Anúncio 3"} tags={['Bope', 'DBV', 'Saúde']} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi numquam, dolorum quasi labore repellat reiciendis autem. Sapiente dignissimos voluptas sunt nostrum ullam pariatur, eius vero voluptate veniam tenetur tempore sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi numquam, dolorum quasi labore repellat reiciendis autem. Sapiente dignissimos voluptas sunt nostrum ullam pariatur, eius vero voluptate veniam tenetur tempore sequi."}/>
                       <Article title={"Anúncio 4"} tags={['Bope', 'DBV', 'Saúde']} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi numquam, dolorum quasi labore repellat reiciendis autem. Sapiente dignissimos voluptas sunt nostrum ullam pariatur, eius vero voluptate veniam tenetur tempore sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi numquam, dolorum quasi labore repellat reiciendis autem. Sapiente dignissimos voluptas sunt nostrum ullam pariatur, eius vero voluptate veniam tenetur tempore sequi."}/>
                       <Article title={"Anúncio 5"} tags={['Bope', 'DBV', 'Saúde']} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi numquam, dolorum quasi labore repellat reiciendis autem. Sapiente dignissimos voluptas sunt nostrum ullam pariatur, eius vero voluptate veniam tenetur tempore sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi numquam, dolorum quasi labore repellat reiciendis autem. Sapiente dignissimos voluptas sunt nostrum ullam pariatur, eius vero voluptate veniam tenetur tempore sequi."}/>
                       <Article title={"Anúncio 6"} tags={['Bope', 'DBV', 'Saúde']} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi numquam, dolorum quasi labore repellat reiciendis autem. Sapiente dignissimos voluptas sunt nostrum ullam pariatur, eius vero voluptate veniam tenetur tempore sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi numquam, dolorum quasi labore repellat reiciendis autem. Sapiente dignissimos voluptas sunt nostrum ullam pariatur, eius vero voluptate veniam tenetur tempore sequi."}/>
                </Content>
            </AcessProvider>
        </Container>
    )
}