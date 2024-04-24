import { useEffect, useState } from "react"


export const useForm = ( initialForm ) => {

    const [ formState, setFormState ] = useState( initialForm );

    const handleInputChange = ({ target }) => {
        const { name, value, checked, type} = target;

        setFormState(prevState => ({
            ...prevState,
            [ name ]: type === 'checkbox' ? checked : value,
        }));
    }

    const handleResetForm = () => {
        setFormState({});
    }
    
    return { 
        ...formState,
        formState,
        handleInputChange,
        handleResetForm,
    }
}
