import { Route, Routes, BrowserRouter } from "react-router-dom";

import { AdmRoutes } from "./adm.routes"
import { AppRoutes } from "./app.routes"

export function Router() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/*" Component={AppRoutes} />
                <Route path="/admin/*" Component={AdmRoutes} />
            </Routes>
        </BrowserRouter>
    )
}