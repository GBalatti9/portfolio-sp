import { useContext } from "react"
import { UserContext } from "../../auth/context";


export const AdminPage = () => {

    const { authState } = useContext( UserContext );
    console.log({ authState });

    return (
        <div>AdminPage </div>
    )
}
