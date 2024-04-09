

export const Inputs = ({ name, type }) => {
    return (
        <>
            {
                name === 'Descripción' ?
                    <>
                        <label htmlFor={name} className="col-span-2 mb-1 font-medium">{name}</label>
                        <textarea type="text" className="border col-span-2 rounded-md p-2" cols="30" rows="5" id={name} name={name} />
                    </>
                    :
                    name === 'Visibilidad' ?
                        <>
                            <div>
                                <label htmlFor={name} className="col-span-1 mr-2 font-medium">{name}</label>
                                <input type={type} className="col-span-1 rounded-md p-2" checked />
                            </div>
                        </>
                        :
                        name === 'Nombre' ?
                            <>
                                <label htmlFor={name} className="font-medium">{name}</label>
                                <input type={type} className="border col-span-2 rounded-md p-2" />
                            </>
                            :
                            <div className="mt-2 flex items-center">
                                <label htmlFor={name} className="font-medium">{name}</label>
                                <img src="./icons8-subir-50.png" alt="Cargar archivos" className="cursor-pointer w-1/12 transition-transform duration-300 hover:scale-110"
                                />
                                <input type={type} className="rounded-md p-2" multiple />
                            </div>
            }
        </>
    )
}