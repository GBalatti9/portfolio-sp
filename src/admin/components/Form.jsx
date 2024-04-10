import { Button } from "./Button"
import { Inputs } from "./Inputs"
import { useForm } from '../../auth/hooks'

const formElements = [
    { name: 'Nombre',      type: 'text' },
    { name: 'Descripción', type: 'textarea' },
    { name: 'Imágenes',    type: 'file' },
    { name: 'Videos',      type: 'file' },
    { name: 'Visibilidad', type: 'checkbox' },
]

export const Form = ({ onClick }) => {
const { formState, handleInputChange } = useForm();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ formState });
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
