import { useContext } from "react";

import { AcessContext } from "../../../hooks/acess";

import { Container } from "./styles";

export function Content() {
    const { bd } = useContext(AcessContext);
    return (
        <Container>
            <h1>{bd}</h1>
        </Container>
    )
}