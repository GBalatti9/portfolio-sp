import { useContext } from "react"
import { UserContext } from "../../auth/context";
import { useNavigate } from "react-router-dom";


export const AdminPage = () => {

    const { authState, logout } = useContext( UserContext );
    const navigate = useNavigate();
    console.log({ authState });

    const handleLogout = () => {
        logout();
        navigate('/');
    }

    return (
        <>
            <div>Admin Page</div>
            <button onClick={ handleLogout }>Logout</button>
        </>
    )
}
