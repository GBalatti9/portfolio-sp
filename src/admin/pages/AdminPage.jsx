import { useContext, useState } from "react"
import { UserContext } from "../../auth/context";
import { useNavigate } from "react-router-dom";
import { ButtonsLayout, LayoutAdmin } from "../layout";
import { Button, Form, Table } from "../components";
import '../../index.css';
import { useForm } from "../../auth/hooks";

const initialForm = {
    name: '',
    description: '',
    images: [] || '',
    videos: [] || '',
    visibility: false,
}

export const AdminPage = () => {
    const [ formOpen, setFormOpen ] = useState(false);
    const [ fadeOut, setFadeOut ]   = useState(false);

    const { formState, handleInputChange, handleResetForm } = useForm(initialForm);

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

    const navigateToHome = () => {
        navigate('/');
    }

    return (
        <>
        <LayoutAdmin>
            <ButtonsLayout>
                <Button color={ "blue" } text="Agregar un elemento" onClick={ handleFormOpen }/>
                <Button onClick={ handleLogout } color={ "blue" } text="Logout"/>
                <Button onClick={ navigateToHome } color={ "blue" } text="Ir a home"/>
            </ButtonsLayout>
            {
                formOpen 
                ?
                <div className={`${fadeOut ? "animate-fadeOut" : "animate-fadeIn"}`}>
                        <Form 
                            onClick           = { handleFormClose } 
                            formState         = { formState } 
                            handleInputChange = { handleInputChange }
                            handleResetForm   = { handleResetForm }
                            />
                    </div>
                : 
                <Table />
            }
        </LayoutAdmin>
        </>
    )
}
