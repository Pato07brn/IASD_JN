import { api } from "../services/api"
import { createContext, useContext, useState, useEffect } from "react";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { app } from "../firebase"

const auth = getAuth(app)

export const AuthContext = createContext({})

function AuthProvider({ children }) {
    const [data, setData] = useState({});

    async function SignIn({ email, password }) {
        await signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const { accessToken, uid } = userCredential.user;
                localStorage.setItem("@IASDJNAuthUser:", uid);
                sessionStorage.setItem("@IASDJNAuthToken:", accessToken);
                api.defaults.headers.common["Autorization"] = accessToken;
                setData({ accessToken, uid });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    async function SinOut() {
        getAuth().signOut().then(() => {
            localStorage.removeItem("@IASDJNAuthUser:");
            localStorage.removeItem("@IASD_DATA:");
            sessionStorage.removeItem("@IASDJNAuthToken:");
            setData({})
        })
            .catch(() => {
                console.error("Não foi possível deslogar")
            })

    }

    useEffect(() => {
        const uid = localStorage.getItem("@IASDJNAuthUser:");
        const accessToken = sessionStorage.getItem("@IASDJNAuthToken:");

        if (uid || accessToken) {
            api.defaults.headers.common["Autorization"] = accessToken;
            setData({ accessToken, uid });
        }

    }, [])

    return (
        <AuthContext.Provider value={{ SignIn, user: data.accessToken, SinOut }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext)
    return context
}

export { AuthProvider, useAuth }




