import { Container } from "./style"

export function Button({ title, isDisable = false, ...rest }){
    return(
        <Container {...rest}>
           {title}
        </Container>
    )
}