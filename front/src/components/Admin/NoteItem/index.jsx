import { FiPlus, FiX } from "react-icons/fi";

import { Container } from "./style";

export function NoteItem({$isnew = false, value, onClick, ...rest}){

return (
    <Container>
        <input type="text"
            readOnly={!$isnew}
            value={value}
            placeholder={$isnew ? "Novo": ""}
            {...rest}
        />
        <button type="button"
            className={$isnew? "button-add":"button-remove"}
            onClick={onClick}
        >
            {
                $isnew ? <FiPlus size={30}/>:<FiX size={30}/>
            }
        </button>
    </Container>
)};