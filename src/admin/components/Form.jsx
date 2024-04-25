import { Button, Inputs } from "./";
import { useForm } from '../../auth/hooks';
import { startUploadingFirebase, startUploadingImgsAndVds, uploadFirebase } from "../helpers";

import { useEffect, useState } from "react";
import { LoadingSpinner } from "../../ui/components";

// const formElements = [
//     { name: 'Nombre', type: 'text' },
//     { name: 'Descripción', type: 'textarea' },
//     { name: 'Imágenes', type: 'file' },
//     { name: 'Videos', type: 'file' },
//     { name: 'Visibilidad', type: 'checkbox' },
//     { name: 'project', type: 'select' },
// ]
const formElements = [
    { name: 'name', type: 'text' },
    { name: 'description', type: 'textarea' },
    { name: 'images', type: 'file' },
    { name: 'videos', type: 'file' },
    { name: 'visibility', type: 'checkbox' },
    { name: 'project', type: 'select' },
]

export const Form = ({ onClick, formState, handleInputChange, handleResetForm }) => {
    const [ loading, setLoading ] = useState( false );

    const handleSubmit = async (e) => {
        e.preventDefault();
        handleResetForm();
        // localStorage.removeItem('documents');
        if (Object.values(formState).length === 0) return;

        setLoading(true);
        try {
            await startUploadingFirebase(formState);
            handleResetForm();
        } catch (error) {
            throw new Error('Error en admin/components/Form: ', error);
        } finally {
            setLoading(false);
        }

    }

    return (
        <LoadingSpinner loading={loading} >
            <form className="bg-white px-4 py-2 rounded-md shadow-lg mb-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 h-full" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
                    {
                        formElements.map((element, i) => (
                            <Inputs {...element}
                                key={element + i}
                                handleInputChange={handleInputChange}
                                values={ formState }
                            />
                        ))
                    }
                    {/* <br /> */}
                    {/* <br /> */}
                    {/* {Array.isArray(values.images) ?
                        <div className="border border-red-500 rounded-md overflow-hidden">
                            {values.images.map((image) => (
                                <img src={image} alt="" />
                            ))}
                        </div>
                        : <p> {values.images} </p>} */}
                    {/* <br /> */}
                    {/* {Array.isArray(values.videos) ?
                        <div>
                            {values.videos.map((video) => (
                                <img src={video} alt="" />
                            ))}
                        </div>
                        : <p> {values.videos} </p>} */}
                    <div className="flex justify-around col-span-2 my-2">
                        <Button color={"red"} text="Descartar" onClick={onClick} setDisabled={`${loading ? 'disabled' : ''}`} />
                        <Button color={"blue"} text="Guardar" setDisabled={`${loading ? 'disabled' : ''}`} />
                    </div>
                </div>
            </form>
        </LoadingSpinner>
    )
}

{/* <LoadingSpinner loading = { loading }> */ }
{/* </LoadingSpinner> */ }