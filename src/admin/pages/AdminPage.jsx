import { useContext } from "react"
import { UserContext } from "../../auth/context";
import { useNavigate } from "react-router-dom";


export const AdminPage = () => {

    const { authState, logout } = useContext( UserContext );
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    }

    return (
        <>
        <button onClick={ handleLogout }>Logout</button>
        </>
    )
}
