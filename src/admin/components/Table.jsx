
import { LoadingSpinner } from "../../ui/components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDocuments } from "../../store/projects/thunks";
import { Link } from "react-router-dom";


export const Table = () => {

    const dispatch = useDispatch();
    const { isLoading: loading, projects, error } = useSelector((state) => state.projects);
    // console.log({ projects });

    useEffect(() => {
        dispatch(getDocuments());
    }, [])

    return (
        <LoadingSpinner loading={loading}>

            <div className="grid grid-cols-3">
                {
                    !error ?
                        projects.map((project) => (
                            <Link to={`edit/${project.id}`} key={project.id} className="border border-slate-500 rounded-lg shadow-md w-12/12 p-2 text-center cursor-pointer flex flex-col justify-center">
                                <h4>Name: {project.name}</h4>
                                {
                                    project.images !== 'No images' &&
                                    <div className="border border-slate-500 h-44 my-2 rounded overflow-hidden">
                                        <img src={project.images} className="w-full h-full object-cover" alt={project.images} />
                                    </div>
                                }
                                {
                                    project.videos !== 'No videos' &&
                                    <div className="border border-slate-500 h-44 rounded">
                                        <video className="w-full h-full object-cover" autoPlay muted playsInline loop> <source src={project.videos[0] || ''} type="video/mp4" name="video" />  </video>
                                    </div>
                                }
                                <p>Description: {project.description}</p>
                                <p>Visibility: {project.visibility ? 'True' : 'False'}</p>
                                <p>Type: {project.project}</p>
                            </Link>
                        ))
                        : <p>{error}</p>
                }
            </div>
        </LoadingSpinner>
    )
}
