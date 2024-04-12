import { Button } from "./Button"
import { Inputs } from "./Inputs"
import { useForm } from '../../auth/hooks'
import { startUploadingFiles, uploadImagesAndVideos } from "../helpers"

const formElements = [
    { name: 'Nombre',      type: 'text' },
    { name: 'Descripción', type: 'textarea' },
    { name: 'Imágenes',    type: 'file' },
    { name: 'Videos',      type: 'file' },
    { name: 'Visibilidad', type: 'checkbox' },
]

export const Form = ({ onClick }) => {
const { formState, handleInputChange } = useForm();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (Object.values(formState).length === 0) return;

        const { Imágenes: imgs, Videos: videos } = formState;

        if (imgs?.length > 0) {
            const imageUrls = await startUploadingFiles(imgs);
        };
        if (videos?.length > 0)  {
            const videosUrls = await startUploadingFiles(videos);
        };

        
    }

    return (
        <>
            <form className="border border-white bg-white p-4 rounded-md shadow-lg mb-2 w-8/12" onSubmit={ handleSubmit }>
                <div className="grid grid-cols-2">
                {
                    formElements.map(( element, i ) => (
                        <Inputs { ...element } 
                            key               = { element + i } 
                            handleInputChange = { handleInputChange } 
                            />
                        ))
                }
                </div>
                <div className="flex justify-around p-4">
                    <Button color = { "red" }  text = "Descartar" onClick = { onClick } />
                    <Button color = { "blue" } text = "Guardar" />
                </div>
            </form>
        </>
    )
}
