import { Navigate, Route, Routes } from "react-router-dom"
import { HomePage } from "../main/pages";
import { LoginPage } from "../auth/pages";
import { AdminPage } from "../admin/pages/AdminPage";
import { UserProvider } from "../auth/context";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";


export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={ <HomePage /> }/>


            <Route path="/login" element={ 
                <UserProvider>
                    <PublicRoutes>
                        <LoginPage /> 
                    </PublicRoutes>
                </UserProvider>
            }/>

                <Route path="/admin" element={ 
                    <UserProvider>
                            <PrivateRoutes>
                                <AdminPage /> 
                            </PrivateRoutes>
                        </UserProvider>
                }/>
            
                <Route path="/*" element={ <Navigate to={'/'} /> }/>
        </Routes>
    )
}
