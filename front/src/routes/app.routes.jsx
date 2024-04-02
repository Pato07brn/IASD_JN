import { Route, Routes, Navigate } from "react-router-dom";

import { Home } from "../pages/app/home";
import { Fotos } from "../pages/app/fotos";
import { Licoes } from "../pages/app/licoes";
import { Anuncios } from "../pages/app/anuncios";
import { Meditacoes } from "../pages/app/meditacoes";
import { Departamentos } from "../pages/app/departamentos";


export function AppRoutes() {
    return (
        <Routes>
            <Route path="/"  element={<Home />} />
            <Route path="/fotos" element={<Fotos />} />
            <Route path="/licoes" element={<Licoes />} />
            <Route path="/anuncios" element={<Anuncios />} />
            <Route path="/meditacoes" element={<Meditacoes />} />
            <Route path="/departamentos" element={<Departamentos />} />
        </Routes >
    )
}
