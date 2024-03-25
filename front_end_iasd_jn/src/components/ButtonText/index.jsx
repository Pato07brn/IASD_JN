import { Container } from "./style";

export function ButtonText({ title, isactived = false,  ...rest }) {
    return (
        <Container  $isactived={isactived} >
            <button className="pure-material-button-text" type="button" {...rest}>
                {title}
            </button>
        </Container>
    )
}