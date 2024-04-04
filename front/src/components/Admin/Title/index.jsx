import { Container } from "./styles";

export function Title({title, size="1.5em"}) {
    return (
        <Container size={size} >
            <h1>{title}</h1>
        </Container>
    )
}