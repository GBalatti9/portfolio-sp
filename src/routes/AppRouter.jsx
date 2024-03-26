import { Navigate, Route, Routes } from "react-router-dom"
import { HomePage } from "../main/pages";
import { LoginPage } from "../auth/pages";
import { AdminPage } from "../admin/pages/AdminPage";


export const AppRouter = () => {
    return (
        <Routes>

            <Route path="/" element={ <HomePage /> }/>

            <Route path="/login" element={ <LoginPage /> }/>
            <Route path="/admin" element={ <AdminPage /> }/>
        </Routes>
    )
}
