import { useState } from "react"


export const useForm = ( initialForm = {} ) => {

    const [ formState, setFormState ] = useState( initialForm );

    const handleInputChange = ({ target }) => {
        const { name, value } = target;
        console.log({ name, value });

        setFormState({
            ...formState,
            [ name ]: value,
        });
    }

    const handleResetForm = () => {
        setFormState( initialForm );
    }

    return { 
        ...formState,
        formState,
        handleInputChange,
        handleResetForm,
    }
}
