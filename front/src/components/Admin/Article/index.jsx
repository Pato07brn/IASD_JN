import { useContext } from "react";
import { LuPenSquare, LuDelete } from "react-icons/lu";

import { Container } from "./styles";

export function Article({ title, tags = [], description, children, ...rest }) {

    return (
        <Container>
            <div className="content">
                <h1>{title}</h1>
                <div className="description">{description}</div>
                <div className="tags">
                    {
                        tags.map(tag => <span key={tag}>{tag}</span>)
                    }
                </div>
            </div>
            <div className="actions">
                <LuPenSquare size={30} color="#09B980"/>
                <LuDelete size={30} color="#f44336"/>
            </div>
        </Container>
    )
}