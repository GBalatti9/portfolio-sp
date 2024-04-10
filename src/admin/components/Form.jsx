import { Button } from "./Button"
import { Inputs } from "./Inputs"

const formElements = [
    { name: 'Nombre',      type: 'text' },
    { name: 'Descripción', type: 'textarea' },
    { name: 'Imágenes',    type: 'file' },
    { name: 'Videos',      type: 'file' },
    { name: 'Visibilidad', type: 'checkbox' },
]

export const Form = ({ onClick }) => {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <form className="border border-white bg-white p-4 rounded-md shadow-lg mb-2 w-8/12" onSubmit={ handleSubmit }>
                <div className="grid grid-cols-2">
                {
                    formElements.map(( element, i ) => (
                        <Inputs {...element} key={ element + i } />
                        ))
                }
                </div>
                <div className="flex justify-around p-4">
                    <Button color={ "bg-red-400" } text="Descartar" onClick={ onClick } />
                    <Button color={ "bg-blue-400" } text="Guardar" />
                </div>
            </form>
        </>
    )
}
