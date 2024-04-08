import { useContext } from "react"
import { UserContext } from "../../auth/context";
import { useNavigate } from "react-router-dom";
import { LayoutAdmin } from "../layout";


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
            <div>Admin Page</div>
            <button onClick={ handleLogout }>Logout</button>
        </LayoutAdmin>
        </>
    )
}
