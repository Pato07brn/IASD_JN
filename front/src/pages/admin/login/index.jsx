import { api } from "../../../services/api";
import { useEffect, useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

import { useAuth } from "../../../hooks/auth"

import { Container, Form } from "./styles";

import { Input } from "../../../components/Input"
import { Button } from "../../../components/Button"

export function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { SignIn } = useAuth();

    async function handlerSubmit() {
        SignIn({email, password});
    }

    return (
        <Container>
            <Form>
                <h1>Login</h1>
                <div>
                    <Input type="email" placeholder="Email" icon={FaRegUserCircle} onChange={e => setEmail(e.target.value)} />
                    <Input type="password" placeholder="Senha" icon={RiLockPasswordFill} onChange={e => setPassword(e.target.value)} />
                </div>
                <Button type="button" title={"Entrar"} onClick={handlerSubmit} />
            </Form>
        </Container>
    )
}