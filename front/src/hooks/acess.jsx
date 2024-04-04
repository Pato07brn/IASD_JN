import { createContext, useContext, useState } from "react";


export const AcessContext = createContext({})

function AcessProvider({ children }) {
    const [bd, bdSet] = useState("Anúncio");
    const [navBar, setNavBar] = useState(false)

    //constante para verificar se o localstorage foi alterado ou não
    const [localData, setLocalData] = useState(false)

    function updateAcess(page) {
        bdSet(page);
    }

    function updateLocalData(state) {
        setLocalData(state)
        if (state == false) {
            localStorage.removeItem("@IASD_DATA:");
            return
        }
    }

    return <AcessContext.Provider value={{ bd, updateAcess, localData, updateLocalData, navBar, setNavBar }} >{children}</AcessContext.Provider>
}

function UseAcess(){
    const context = useContext(AcessContext);
    return context;
} 

export { AcessProvider, UseAcess }