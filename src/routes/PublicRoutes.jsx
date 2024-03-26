import { useContext } from "react";
import { UserContext } from "../auth/context";
import { Navigate } from "react-router-dom";


export const PublicRoutes = ({ children }) => {
    const { authState } = useContext( UserContext );
    const { logged } = authState

    return ( !logged ) ? <> { children } </> : <Navigate to='/admin'/>
}
