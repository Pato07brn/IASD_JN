import { Container } from "./style"

export function Button({ title, bcColor, isDisable = false, width = "100%", ...rest }){
    return(
        <Container $bccolor={bcColor} width={width} {...rest}>
           {title}
        </Container>
    )
}