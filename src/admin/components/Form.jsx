import { Button } from "./Button"
import { Inputs } from "./Inputs"

const formElements = [
    { name: 'Nombre',      type: 'text' },
    { name: 'Descripción', type: 'textarea' },
    { name: 'Visibilidad', type: 'checkbox' },
    { name: 'Imágenes',    type: 'file' },
    { name: 'Videos',      type: 'file' },
]

export const Form = () => {
    return (
        <>
            <form className="border border-white bg-white p-4 rounded-md">
                {
                    formElements.map(( element, i ) => (
                        <Inputs {...element} key={ element + i } />
                    ))
                }
                <div className="flex justify-end p-4">
                <Button color={ "bg-blue-400" } text="Guardar" />
                </div>
            </form>
        </>
    )
}
