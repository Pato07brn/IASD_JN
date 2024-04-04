import { Route, Routes, Navigate } from "react-router-dom";
import { AcessProvider } from "../hooks/acess";

import { Home } from "../pages/admin/home";
import { New } from "../pages/admin/new";

export function AuthRoutes() {
    return (
        <AcessProvider>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/new" element={<New />} />
            </Routes >
        </AcessProvider>

    )
}

