import { Container } from "./style"

export function Input({icon: Icon , size, ...rest}){
    return(
        <Container size={size}>
           {Icon && <Icon size={20}/>}
           <input {...rest} />
        </Container>
    )
}