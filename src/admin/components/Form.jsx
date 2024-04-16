import { Button, Inputs } from "./";
import { useForm } from '../../auth/hooks';
import { startUploadingFirebase, startUploadingImgsAndVds, uploadFirebase } from "../helpers";

import { useState } from "react";
import { LoadingSpinner } from "../../ui/components";

const formElements = [
    { name: 'Nombre', type: 'text' },
    { name: 'Descripción', type: 'textarea' },
    { name: 'Imágenes', type: 'file' },
    { name: 'Videos', type: 'file' },
    { name: 'Visibilidad', type: 'checkbox' },
]

export const Form = ({ onClick }) => {
    const [ loading, setLoading ] = useState(false);
    const [ status, setStatus ] = useState('Ok');

    const { formState, handleInputChange, handleResetForm } = useForm();

    const handleSubmit = async (e) => {
        e.preventDefault();
        handleResetForm();
        if (Object.values(formState).length === 0) return;

        setLoading(true);
        try {
            const { status } = await startUploadingFirebase(formState);
            setStatus( status );
            handleResetForm();
        } catch (error) {
            throw new Error('Error en admin/components/Form: ', error);
        } finally{
            setLoading(false);
        }

    }

    return (
        <>
            <LoadingSpinner loading = { loading }>
                <form className="border border-white bg-white p-4 rounded-md shadow-lg mb-2 w-8/12 h-4/6" onSubmit = { handleSubmit }>

                        <div className="grid grid-cols-2 h-full" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
                            {
                                formElements.map((element, i) => (
                                    <Inputs {...element}
                                        key={element + i}
                                        handleInputChange={handleInputChange}
                                    />
                                ))
                            }
                            <br />
                            <div className="flex justify-around p-4 col-span-2">
                                <Button color = { "red" }  text = "Descartar" onClick = {onClick} setDisabled={`${loading ? 'disabled' : ''}`}/>
                                <Button color = { "blue" } text = "Guardar"   setDisabled = {`${loading ? 'disabled' : ''}`}/>
                            </div>
                        </div>

                </form>
            </LoadingSpinner>
        </>

    )
}