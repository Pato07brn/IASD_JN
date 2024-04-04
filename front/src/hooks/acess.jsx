import { createContext, useState } from "react";

export const AcessContext = createContext();

export function AcessProvider({ children }) {
    const [bd, bdSet] = useState("Anúncio")

    //constante para verificar se o localstorage foi alterado ou não
    const [localData, setLocalData] = useState(false)

    function updateAcess(page) {
        bdSet(page);
    }

    function updateLocalData(state) {
        setLocalData(state)
        if(state == false){
            localStorage.removeItem("@IASD_DATA:");
            return
        }
    }

    return <AcessContext.Provider value={{ bd, updateAcess, localData, updateLocalData }} >{children}</AcessContext.Provider>
}