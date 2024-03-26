import { Navigate, Route, Routes } from "react-router-dom"
import { HomePage } from "../main/pages";
import { LoginPage } from "../auth/pages";
import { AdminPage } from "../admin/pages/AdminPage";
import { UserProvider } from "../auth/context";


export const AppRouter = () => {
    return (
        <Routes>
            {/* Rutas públicas */}
            <Route path="/" element={ <HomePage /> }/>
            <Route path="/login" element={ <LoginPage /> }/>

            {/* Ruta privada */}
                <Route path="/admin" element={ 
                        <UserProvider>
                    <AdminPage /> 
                        </UserProvider>
                }/>
            
        </Routes>
    )
}
