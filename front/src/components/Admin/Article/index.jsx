import { useState, useContext } from "react";
import { LuPenSquare, LuDelete, LuCheckCircle, LuXCircle } from "react-icons/lu";

import { api } from "../../../services/api";
import { AcessContext } from "../../../hooks/acess";

import { Container } from "./styles";

import { Input } from "../../Input";
import { TextArea } from "../../TextArea";
import { NoteItem } from "../../Admin/NoteItem";
import { Title } from "../../Admin/Title";

export function Article({ title, tags = [], anuId, description = String, autor = "Nengue", ...rest }) {
    //States
    const [editable, setEditable] = useState(false);
    const [titleEd, setTitleEd] = useState(title);
    const [verDescricao, setVerDescricao] = useState(false);
    const [descriptionEd, setDescriptionEd] = useState(description);
    const [tagsEd, setTags] = useState(tags);
    const [newTag, setNewTag] = useState('');

    //Context
    const { updateLocalData } = useContext(AcessContext);

    //AUX
    let descriptioAux = '';
    if (description.length > 150) {
        descriptioAux = description.substring(0, 150) + "...";
    } else {
        descriptioAux = descriptionEd;
    }

    //Handlers
    function handlerToogle(toogle, setToogle) {
        if (toogle) {
            setToogle(false);
        } else {
            setToogle(true);
        }
    }
    function handlerAddTag() {
        setTags(prevState => [...prevState, newTag]);
        setNewTag("")
    }
    function handlerRemoveTag(deleted) {
        setTags(prevState => prevState.filter(tag => tag !== deleted));
    }

    async function handlerUpdate() {
        const confirm = window.confirm("Deseja atualizar o anúncio: " + title + "?");
        if (confirm) {
            if (!titleEd) { return alert("Adicione um novo título") };
            if (!descriptionEd) { return alert("Adicione um novo título") };
            if (newTag) { return alert("Adicione a Tag antes de atualizar") }
            const data = {
                title: titleEd,
                anuId: anuId,
                tags: tagsEd,
                description: descriptionEd
            }
            const response = await api.put("/anuncios", data)
            if (response) {
                localStorage.removeItem("@IASD_DATA:");
                setEditable(false)
                updateLocalData(false);
            }
        }
    }
    async function handlerDelete() {
        const confirm = window.confirm("Deseja Deletar o anúncio: " + title + "?");
        if (confirm) {
            const response = await api.delete("/anuncios/" + anuId)
            if (response) {
                updateLocalData(false);
            }
        }
    }

    //Se for acionado a edição
    if (editable) {
        return (
            <Container>
                <form className="content">
                    <Input
                        size={"2em"}
                        autoFocus={true}
                        value={titleEd}
                        onChange={(event) => { setTitleEd(event.target.value) }}
                    />
                    <TextArea
                        value={descriptionEd}
                        onChange={(event) => { setDescriptionEd(event.target.value) }}
                    />
                    <div className={"tags"}>
                        {
                            tagsEd.map((tag, index) => (
                                <NoteItem
                                    key={String(index)}
                                    value={tag}
                                    onClick={() => handlerRemoveTag(tag)}
                                />))
                        }
                        <NoteItem
                            $isnew
                            value={newTag}
                            onChange={(event) => setNewTag(event.target.value)}
                            onClick={handlerAddTag}
                        />
                    </div>
                </form>
                <div className="actions">
                    <LuCheckCircle
                        size={30}
                        color={"#09B980"}
                        onClick={() => {
                            handlerUpdate();
                        }}
                    />
                    <LuXCircle
                        size={30}
                        color={"#f44336"}
                        onClick={() => {
                            handlerToogle(editable, setEditable)
                        }}
                    />
                </div>
            </Container>
        );
    }

    //Mas se não este é o normal
    return (
        <Container>
            <div className={"content"}>
                <h1 className={"title"}>Título: {title}</h1>
                <h3>Autor: {autor}</h3>
                <div className={"description"}
                    onClick={() =>
                        handlerToogle(verDescricao, setVerDescricao)}
                >
                    <Title title={"Descrição:"} size={"1.1em"} />
                    {verDescricao ? descriptionEd : descriptioAux}
                </div>
                <div className={"tags"}>
                    <Title title={"Tags"} />
                    {
                        tags.map(tag => <span key={tag}>{tag}</span>)
                    }
                </div>
            </div>
            <div className={"actions"}>
                <span className={"svg"}>
                    <LuPenSquare
                        size={30}
                        color={"#09B980"}
                        onClick={() => {
                            handlerToogle(editable, setEditable);
                        }} />
                </span>
                <span className={"svg"}>
                    <LuDelete
                        size={30}
                        color={"#f44336"}
                        onClick={() => {
                            handlerDelete();
                        }} />
                </span>
            </div>
        </Container>
    )
}