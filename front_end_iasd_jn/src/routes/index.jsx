import { Route, Routes, BrowserRouter, HashRouter } from "react-router-dom";

import { AdmRoutes } from "./adm.routes"
import { AppRoutes } from "./app.routes"

export function Router() {

    return (
        <BrowserRouter basename="/">
            <Routes>
                <Route path="/*" Component={AppRoutes} />
                <Route path="/admin/*" Component={AdmRoutes} />
            </Routes>
        </BrowserRouter>
    )
}