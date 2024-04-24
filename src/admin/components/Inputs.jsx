import { useRef, useState } from "react"

export const Inputs = ({ name, type, handleInputChange, values }) => {

    const [files, setFiles] = useState([]);
    console.log({ values });
    const fileInputRef = useRef();

    const handleFilesUpload = (e) => {
        const files = Array.from(e.target.files);
        setFiles(files);
        const event = { target: { name: e.target.name, value: files } }
        handleInputChange(event);
    }

    return (
        <>
            {
                name === 'description' ?
                    <div className="col-span-2 font-medium my-2">
                        <label htmlFor={name} >{name}</label>
                        <br />
                        <textarea
                            type="text"
                            className="border border-slate-300 w-full rounded-md p-2"
                            cols="30"
                            rows="10"
                            id={name}
                            name="description"
                            onChange={handleInputChange}
                            value={values.description}
                        />
                    </div>
                    :
                    name === 'visibility' ?
                        <div className="mt-4 text-center flex justify-center items-center">
                            <label htmlFor={name} className="font-medium">{name}</label>
                            <input
                                type={type}
                                className="rounded-md p-2 ml-1"
                                name="visibility"
                                onChange={handleInputChange}
                                checked={values.visibility}
                            />
                        </div>
                        :
                        name ==='name' ?
                            <div className="font-medium my-2 col-span-2">
                                <label htmlFor={name}>{name}</label>
                                <br />
                                <input
                                    type={type}
                                    className="border border-slate-300 w-full rounded-md p-2"
                                    onChange={handleInputChange}
                                    name="name"
                                    value={values.name}
                                />
                            </div>
                            :
                            name === 'project' ?
                                <div className="mt-2 mx-auto shadow-md rounded-md border">
                                    <select name="project" id="project" className="text-center px-2 py-2 rounded" onChange={handleInputChange}>
                                        <option value="Elegir" disabled defaultValue={'Tipo de proyecto'}>Tipo de proyecto</option>
                                        <option value="ads">Ads</option>
                                        <option value="personal-project">Personal Project</option>
                                    </select>
                                </div>
                                :
                                <div className="mt-2 flex items-center flex-col">
                                    <label htmlFor={name} className="font-medium"> {name}</label>
                                    <div className="h-6">
                                        {files?.length === 1 ? <p>{files.length} archivo seleccionado</p> : files?.length > 0 ? <p>{files.length} archivos seleccionados</p> : <p className="italic">ningún archivo seleccionado</p>}
                                    </div>
                                    <div
                                        className={`border border-slate-500 px-2 rounded-md  ${ files.length > 0 ? 'opacity-50' : 'hover:cursor-pointer hover:bg-slate-400 hover:text-white transition-all hover:shadow-lg' }`}
                                        disabled={ files.length > 0 }
                                        onClick={() => {
                                            if (files.length === 0) {
                                                fileInputRef.current.click();
                                            }
                                        }}>
                                            Seleccionar archivos
                                    </div>
                                    <input
                                        ref={fileInputRef}
                                        type={type}
                                        accept={`${name === 'Imágenes' ? 'image/*' : 'video/*'}`}
                                        className="rounded-md p-2 hidden"
                                        multiple
                                        name={name}
                                        onChange={handleFilesUpload}
                                    />
                                </div>
            }
        </>
    )
}