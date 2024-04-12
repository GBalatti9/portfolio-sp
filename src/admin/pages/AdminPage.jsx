import { useContext, useState } from "react"
import { UserContext } from "../../auth/context";
import { useNavigate } from "react-router-dom";
import { ButtonsLayout, LayoutAdmin } from "../layout";
import { Button, Form } from "../components";
import { motion, AnimatePresence } from 'framer-motion';


export const AdminPage = () => {
    const [ formOpen, setFormOpen ] = useState(false);

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
                <Button color={ "blue" } text="Agregar un elemento" onClick={ () => setFormOpen(true) }/>
                <Button onClick={ handleLogout } color={ "blue" } text="Logout"/>
            </ButtonsLayout>
            <AnimatePresence>
            {
                formOpen &&
                <motion.div
                initial    = {{ opacity: 0 }}
                animate    = {{ opacity: 1 }}
                exit       = {{ opacity: 0 }}
                className  = "flex justify-center border border-red-600"
                >
                        <Form onClick = { () => setFormOpen(false) }/>
                    </motion.div>
            }
            </AnimatePresence>
        </LayoutAdmin>
        </>
    )
}
