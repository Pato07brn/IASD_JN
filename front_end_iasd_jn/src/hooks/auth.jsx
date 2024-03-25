import { createContext, useContext, useState, useEffect } from "react";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import {app} from "../firebase"

const auth = getAuth(app)
 
export const AuthContext = createContext({})

function AuthProvider({children}){
    const [data, setData] = useState({})
    
    async function SignIn({email, password}){

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) =>{
                console.log("logado com sucesso");
                console.log(userCredential);
                const { accessToken, uid } = userCredential.user
                localStorage.setItem("@IASDJNAuthUser:", JSON.stringify(uid))
                localStorage.setItem("@IASDJNAuthToken:", JSON.stringify(accessToken))
                setData({accessToken, uid})
            })
            .catch((error) =>{
                console.log("deu ruim");
                console.log(error);
            })
    }

    useEffect(()=>{
        const userId = localStorage.getItem("@IASDJNAuthUser:")
        const token = localStorage.getItem("@IASDJNAuthToken:")

    },[])

    return(
        <AuthContext.Provider value={{SignIn}}>
            { children }
        </AuthContext.Provider>
    )
}

function useAuth(){
    const context = useContext(AuthContext)
    return context
}

export { AuthProvider, useAuth }




