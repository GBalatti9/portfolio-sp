
import { LoadingSpinner } from "../../ui/components";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDocuments, startDeletingDocument } from "../../store/projects/thunks";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { compareDocuments } from "../../helpers";


export const Table = () => {

    const [ hoverIndex, setHoverIndex ] = useState(null);
    const [ newData, setNewData ] = useState(false);

    const dispatch = useDispatch();
    const { isLoading: loading, projects, error } = useSelector((state) => state.projects);
    
    const handlePage = () => {
        localStorage.removeItem('documents');
        window.location.reload();
    }
    const fetchData = async () => {
        await compareDocuments().then(result => {
            // El retorno de compareDocuments es true si efectivamente los objetos son iguales. Si son diferentes va a devolver false. Por eso el !result. Es decir, si obtengo false necesito que sea true y si obtengo true necesito que sea false.
            setNewData(!result);
        });
    };
    
    useEffect(() => {
        dispatch(getDocuments());
        fetchData();
    }, [])

    const deleteDoc = (e, id) => {
        e.preventDefault();
        setHoverIndex(null);
        dispatch(startDeletingDocument( id ));
        setNewData(false);
    }
    return (
        <LoadingSpinner loading={loading}>
            { newData && 
            <div className="absolute top-0 right-0 m-2">
                <p className="italic">Hay nueva informacion.</p>
                <button 
                onClick={handlePage}
                className="border border-slate-500 px-2 py-1 rounded-md">Recargar pagina</button> 
            </div>
            }
            <div className="grid grid-cols-3 gap-2">
                {
                    !error ?
                        projects?.map((project, index) => (
                            <Link
                                key={ project + index }
                                to={`edit/${project.id}`}
                                className={`rounded-md shadow-md p-2 cursor-pointer relative hover:shadow-xl transition-all bg-slate-50 hover:bg-slate-100 ${hoverIndex !== null && hoverIndex !== index ? 'opacity-50' : ''
                                    }`}
                                onMouseEnter={() => setHoverIndex(index)}
                                onMouseLeave={() => setHoverIndex(null)}
                            >
                                <button
                                    className="border px-2 py-1 border-red-900 w-fit absolute bottom-0 right-0 m-2 rounded-md hover:bg-red-900 hover:text-white transition-all"
                                    onClick={(e) => deleteDoc(e, project.id)}
                                >Delete</button>
                                <h4> <span className="font-bold"> Name: </span> {project.name}</h4>
                                {
                                    project.images !== 'No images' ?
                                        <div className="border border-slate-500 h-44 my-2 rounded overflow-hidden">
                                            <img src={project.images} className="w-full h-full object-cover" alt={project.images} />
                                        </div>
                                        : <div>
                                            <p><span className="font-bold">Imagenes: </span>No hay imágenes</p>
                                        </div>
                                }
                                {
                                    project.videos !== 'No videos' ?
                                        <div className="border border-slate-500 h-44 rounded">
                                            <video className="w-full h-full object-cover" autoPlay muted playsInline loop> <source src={project.videos[0] || ''} type="video/mp4" name="video" />  </video>
                                        </div>
                                        : <div>
                                            <p><span className="font-bold">Videos: </span>No hay videos</p>
                                        </div>
                                }
                                <p><span className="font-bold">Description: </span> {project.description}</p>
                                <p><span className="font-bold">Visibility: </span> {project.visibility ? 'True' : 'False'}</p>
                                <p><span className="font-bold">Type: </span> {project.project}</p>
                            </Link>
                        ))
                        : <p>{error}</p>
                }
            </div>
        </LoadingSpinner>
    )
}
