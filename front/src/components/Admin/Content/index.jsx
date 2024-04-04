import { api } from "../../../services/api";
import { UseAcess } from "../../../hooks/acess";
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";

import { Button } from "../../Button";
import { Article } from "../../Admin/Article";
import { Container } from "./styles";

export function Content() {
    const navigate = new useNavigate();

    const { bd, localData, updateLocalData } = UseAcess();
    const [data, setData] = useState([]);

    //Verifica o localStorage
    useEffect(() => {
        async function reponseData() {
            const response = JSON.parse(localStorage.getItem("@IASD_DATA:"));
            if (response) {
                console.log("Dados vindos do localStorage");
                setData(response);
                updateLocalData(true);
            } else {
                if (!localData) {
                    const response = await api.get("/anuncios");
                    localStorage.setItem("@IASD_DATA:", JSON.stringify(response.data.show));
                    console.log("Dados vindo da API");
                    updateLocalData(true);
                    setData(response.data.show);
                }
            }
        }
        reponseData();
    }, [localData]);

    return (
        <Container>
            <nav>
                <div>Filtros: (no futuro)</div>
                <Button
                    width="auto"
                    title={"Novo: " + bd}
                    bcColor={"#d18121"}
                    onClick={()=>{
                        navigate("./new")
                    }}
                />
            </nav>
            {
                data &&
                data.map(data => (
                    <Article
                        key={data.id}
                        anuId={data.id}
                        title={data.title}
                        autor={data.autor}
                        description={data.description}
                        tags={data.tags}
                    />
                ))
            }
        </Container>
    )
}