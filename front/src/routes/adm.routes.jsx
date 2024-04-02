import { Route, Routes } from "react-router-dom";

import { AuthRoutes } from "./auth.routes";
import { Login } from "../pages/admin/login";
import { useAuth } from "../hooks/auth";

export function AdmRoutes() {

    const { user } = useAuth();

    return (
        <Routes>
            {
            user ?
                <Route path="/*" element={<AuthRoutes />} />
                :
                <Route path="/" element={<Login />} />
            }
        </Routes >
    )
}

