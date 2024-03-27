import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { useForm } from "../hooks";
import { Button, Inputs } from "./";


export const FormComponent = () => {
    
    const navigate = useNavigate();
    const { authState, login } = useContext( UserContext );
    const { formState, handleInputChange } = useForm();

    const inputs = [
        { id: 1, name: 'Nombre',     type: 'text' },
        { id: 2, name: 'Contraseña', type: 'password' },
    ]

    const handleSubmit = ( e ) => {
        e.preventDefault();
        login( formState )
        navigate('/admin');
    }
    return (
        <div>
            <form onSubmit={ handleSubmit } className="border p-4 rounded mb-2 shadow">
                {
                    inputs.map(( input ) => (
                        <Inputs {...input} key={ input.id } handleInputChange={ handleInputChange }/>
                    ))
                }
                    <Button />
            </form>
            <div className="h-2">
                {
                    authState.error ? <p className="text-red-500 text-sm text-center">{ authState.error }</p> : <p></p>
                }
            </div>
        </div>
    )
}
