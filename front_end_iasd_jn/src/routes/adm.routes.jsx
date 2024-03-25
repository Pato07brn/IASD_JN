import { Route, Routes } from "react-router-dom";

import { Home } from "../pages/admin/home";
import { Login } from "../pages/admin/login";

export function AdmRoutes() {
    return (
        <Routes>
            <Route path="/login" element={<Login/>} />
            <Route path="/" element={<Home/>} />
        </Routes >
    )
}

