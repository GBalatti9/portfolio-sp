import { useContext } from "react"
import { FormComponent } from "../components"
import { LayoutAuth } from "../layout"
import { UserContext } from "../context/UserContext"


export const LoginPage = () => {
    const { loading } = useContext( UserContext );
    return (
        <LayoutAuth>
            {
                loading 
                ? <p>Cargando...</p>
                : <FormComponent /> 
            }
        </LayoutAuth>
    )
}
