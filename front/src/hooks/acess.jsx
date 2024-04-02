import { createContext, useState } from "react";

export const AcessContext = createContext();

export function AcessProvider({children}) {
    const [bd, bdSet] = useState("Neida")

    function updateAcess(page) {
        bdSet(page);
        console.log(page);
    }

    return <AcessContext.Provider value={{bd, updateAcess}} >{children}</AcessContext.Provider>
}