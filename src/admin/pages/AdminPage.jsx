import { useContext } from "react"
import { UserContext } from "../../auth/context";
import { useNavigate } from "react-router-dom";
import { LayoutAdmin } from "../layout";
import { LogoutButton } from "../components";


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
            <div>
                <LogoutButton handleLogout={ handleLogout } />
            </div>
        </LayoutAdmin>
        </>
    )
}
