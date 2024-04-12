import { Button, Inputs } from "./";
import { useForm } from '../../auth/hooks';
import { startUploadingFiles } from "../helpers";
import { motion, AnimatePresence } from 'framer-motion';

import { useState } from "react";

const formElements = [
    { name: 'Nombre', type: 'text' },
    { name: 'Descripción', type: 'textarea' },
    { name: 'Imágenes', type: 'file' },
    { name: 'Videos', type: 'file' },
    { name: 'Visibilidad', type: 'checkbox' },
]

export const Form = ({ onClick }) => {
    const [ loading, setLoading ] = useState(false);

    const { formState, handleInputChange } = useForm();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (Object.values(formState).length === 0) return;

        const { Imágenes: imgs, Videos: videos } = formState;

        let imageUrls = [];
        let videoUrls = [];
        setLoading(true);
        try {
            if (imgs?.length > 0) {
                imageUrls = await startUploadingFiles(imgs);
            };
            if (videos?.length > 0) {
                videoUrls = await startUploadingFiles(videos);
            };
        } catch (error) {
            throw new Error(error);
        } finally {
            setTimeout(() => {
                setLoading(false);
            }, 100);
        }


    }

    return (
        <>
            {
                <form className="border border-white bg-white p-4 rounded-md shadow-lg mb-2 w-8/12" onSubmit={handleSubmit}>

                    {
                        !loading ?
                            <AnimatePresence>

                                <motion.div className="grid grid-cols-2 h-96" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
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
                                        <Button color={"red"} text="Descartar" onClick={onClick} />
                                        <Button color={"blue"} text="Guardar" />
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                            :
                            <AnimatePresence>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="col-span-2 flex justify-center items-center h-96 border rounded-md"
                                >
                                    <p>Loading...</p>
                                </motion.div>
                            </AnimatePresence>
                    }
                </form>
            }
        </>
    )
}
