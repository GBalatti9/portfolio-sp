import { Navigate, Route, Routes } from "react-router-dom"
import { HomePage } from "../portfolio/pages";
import { LoginPage } from "../auth/pages";
import { AdminPage } from "../admin/pages/AdminPage";
import { UserProvider } from "../auth/context";
import { PrivateRoutes, PublicRoutes } from "./";
import { PortfolioRoutes } from "../portfolio";
import { AdminRoutes } from "../admin/router/AdminRoutes";


export const AppRouter = () => {
    return (
        <Routes>
        <Route path="/login" element={<UserProvider><PublicRoutes>   <LoginPage />     </PublicRoutes></UserProvider>} />
        <Route path="/admin/*" element={<UserProvider><PrivateRoutes>  <AdminRoutes />   </ PrivateRoutes></UserProvider>} />
        
        <Route path="*" exact={true} element={<PortfolioRoutes />} />
    </Routes>
    )
}
