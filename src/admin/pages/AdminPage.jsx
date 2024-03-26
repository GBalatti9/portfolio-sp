import { useContext } from "react"
import { UserContext } from "../../auth/context";


export const AdminPage = () => {

    const { user } = useContext( UserContext );

    return (
        <div>AdminPage { user } </div>
    )
}
