import { useContext } from "react"
import { UserContext } from "../../auth/context";
import { useNavigate } from "react-router-dom";
import { LayoutAdmin } from "../layout";
import { Button } from "../components";


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
            <div className="w-screen p-4">
                <div className="w-6/12 flex justify-around border-red-400 m-auto">
                    <Button color={ "bg-blue-400" } text="Agregar un elemento"/>
                    <Button onClick={ handleLogout } color={ "bg-blue-400" } text="Logout"/>
                </div>
            </div>
        </LayoutAdmin>
        </>
    )
}
