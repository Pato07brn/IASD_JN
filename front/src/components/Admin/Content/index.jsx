import { useContext } from "react";

import { AcessContext } from "../../../hooks/acess";

import { Container } from "./styles";

export function Content({ children, ...rest }) {
    const { bd } = useContext(AcessContext);
    return (
        <Container>
            <h1>{bd}</h1>
            {children}
        </Container>
    )
}