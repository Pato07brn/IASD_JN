import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AcessContext } from "../../../hooks/acess"

import { api } from "../../../services/api";

import { Input } from "../../../components/Input";
import { Button } from "../../../components/Button";
import { TextArea } from "../../../components/TextArea";
import { NoteItem } from "../../../components/Admin/NoteItem";
import { ButtonText } from "../../../components/ButtonText";


import { Container } from "./styles";

export function New() {
    const { updateLocalData } = useContext(AcessContext);
    const navigate = new useNavigate();

    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    
    
    //Tags
    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("");
    function handlerAddTag() {
        setTags(prevState => [...prevState, newTag]);
        console.log(newTag);
        setNewTag("");
        console.log(newTag);
    };
    function handlerRemoveTag(deleted) {
        setTags(prevState => prevState.filter(tag => tag !== deleted));
    }

    async function handlerSubmit() {
        if (!title) { return alert("Adicione um novo título") };
        if (!description) { return alert("Adicione um novo título") };
        const data = {
            title: title,
            description: description,
            tags: tags
        }
        const response = await api.post("/anuncios", data);
        if (response) {
            console.log("subindo");
            navigate("/admin");
            updateLocalData(false);
            return;
        }
    }

    return (
        <Container>

            <form className="form">
                <div className={"title"}>
                    <h1 >Cadastrar novo </h1>
                    <ButtonText title={"voltar"} onClick={() => { navigate(-1) }} />
                </div>
                <div>
                    <Input
                        type={"text"}
                        placeholder={"Título"}
                        required={true}
                        size={"1.5em"}
                        onChange={(event) => {
                            setTitle(event.target.value)
                        }}
                    />
                    <TextArea
                        placeholder={"Descrição"}
                        required={true}
                        onChange={(event) => {
                            setDescription(event.target.value)
                        }}
                    >
                    </TextArea>
                </div>
                <div className="marcadores">
                    <h2>Marcadores</h2>
                    {
                        tags.map((tag, index) => {
                            return <NoteItem
                                key={String(index)}
                                value={tag}
                                onClick={() => handlerRemoveTag(tag)}
                            />
                        })
                    }
                    <NoteItem
                        $isnew
                        value={newTag}
                        onChange={event => setNewTag(event.target.value)}
                        placeholder={"Nova Tag"}
                        onClick={handlerAddTag}
                    />
                </div>

                <Button type="button" title={"Cadastrar"} onClick={() => { handlerSubmit() }} />
            </form>
        </Container>
    )
}