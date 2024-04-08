import { useContext } from "react"
import { UserContext } from "../../auth/context";
import { useNavigate } from "react-router-dom";
import { ButtonsLayout, LayoutAdmin } from "../layout";
import { Button, Form } from "../components";


export const AdminPage = () => {

    const { logout } = useContext( UserContext );
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    }

    return (
        <>
        <LayoutAdmin>
            <ButtonsLayout>
                <Button color={ "bg-blue-400" } text="Agregar un elemento"/>
                <Button onClick={ handleLogout } color={ "bg-blue-400" } text="Logout"/>
            </ButtonsLayout>
            <div className="flex justify-center">
                <Form/>
            </div>
        </LayoutAdmin>
        </>
    )
}
