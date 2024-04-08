

export const Inputs = ({ name, type }) => {
    console.log( name );
    return (
        <div className="flex flex-col">
            {
                name === 'Nombre' || name === 'Descripción'
                ? <label htmlFor={name}>{name}</label>
                : <label htmlFor={name} className="text-center mt-2">{name}</label>
            }
            {
                type === 'textarea' 
                ? <textarea name={name} id={name} cols="30" rows="5" className="border rounded-md px-2 py-1 w-full"></textarea>
                : type === 'text' 
                ? <input type={type} className="w-full border rounded-md px-2 py-1"/>
                : <input type={type} className="border w-full m-auto flex justify-center items-center p-2"/>
                
            }
        </div>
    )
}
