import { Link, useLocation, useParams } from "react-router-dom"
import { Button, Form } from "../components"
import { LayoutAdmin } from "../layout"
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export const EditPage = () => {
    const [ actualProject, setActualProject ] = useState({});
    const { adminProjectId } = useParams();
    const { projects } = useSelector( state => state.projects );
    console.log({ actualProject });
    
    const findActualProject = ( id ) => {
        const project = projects.find(( project ) => project.id === id);
        if (project) {
            setActualProject(project);
        }
    }

    useEffect(() =>{
        findActualProject( adminProjectId );
    }, [])

    return (
        <LayoutAdmin>
            <Link to={'/admin'}>
                <Button text={'Volver'} />
            </Link>

            {
                actualProject ?
                <Form values = { actualProject }/>
                // <form>
                //     <div>
                //         <label htmlFor=""></label>
                //         <input type="text" value={ actualProject.name } />
                //     </div>
                //     <div>
                //         <label htmlFor=""></label>
                //         <input type="text" value={ actualProject.description } />
                //     </div>
                //     <div className="border w-3/12 rounded-md overflow-hidden">
                //         { Array.isArray(actualProject.images) 
                //             ? actualProject.images.map(( image ) => (
                //             <img src={image} alt={name} />
                //         )) : '' }
                //     </div>
                //     <div className="border w-3/12 rounded-md overflow-hidden">
                //         { Array.isArray(actualProject.videos)
                //             ? actualProject.videos.map(( video ) => (
                //                 <video width="320" height="240" controls>
                //                     <source src={ video } />
                //                 </video>
                //             )) : '' }
                //     </div>
                //     { actualProject.project }
                // </form>
                : ''
            }

        </LayoutAdmin>
    )
}
