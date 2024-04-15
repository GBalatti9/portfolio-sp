import { useContext, useState } from "react"
import { UserContext } from "../../auth/context";
import { useNavigate } from "react-router-dom";
import { ButtonsLayout, LayoutAdmin } from "../layout";
import { Button, Form, Table } from "../components";
import '../../index.css';

export const AdminPage = () => {
    const [ formOpen, setFormOpen ] = useState(false);
    const [ fadeOut, setFadeOut ]   = useState(false);

    const handleFormOpen = () => {
        setTimeout(() => {
            setFormOpen(true);
            setFadeOut(false);
        }, 400);
    }

    const handleFormClose = () => {
        setFadeOut(true);
        setTimeout(() => {
            setFormOpen(false);
            setFadeOut(false);
        }, 400);
    }

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
                <Button color={ "blue" } text="Agregar un elemento" onClick={ handleFormOpen }/>
                <Button onClick={ handleLogout } color={ "blue" } text="Logout"/>
            </ButtonsLayout>
            {
                formOpen 
                ?
                    <div className={`flex justify-center items-center h-full ${fadeOut ? "animate-fadeOut" : "animate-fadeIn"}`}>
                        <Form onClick = { handleFormClose }/>
                    </div>
                : 
                <div className="animate-fadeIn flex justify-center items-center h-full">
                    <Table />
                </div>
            }
        </LayoutAdmin>
        </>
    )
}
