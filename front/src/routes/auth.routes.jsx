import { Route, Routes, Navigate } from "react-router-dom";

import { Home } from "../pages/admin/home";
import { Login } from "../pages/admin/login";

export function AuthRoutes() {
    return (
        <Routes>
            <Route path="" element={<Home/>} />
        </Routes >
    )
}

