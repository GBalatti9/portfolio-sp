import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { useForm } from "../hooks";


export const FormComponent = () => {
    
    const navigate = useNavigate();
    const { login } = useContext( UserContext );
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
        <>
            <form onSubmit={ handleSubmit }>
                {
                    inputs.map(( input ) => (
                        <div key={ input.id }>
                            <label htmlFor={ input.name }>{ input.name }</label>
                            <br />
                            <input type={ input.type } style={{ width: '100%' }} onChange={ handleInputChange } name={ input.name }/>
                        </div>
                    ))
                }
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <button>Login</button>
                </div>
            </form>
        </>
    )
}
