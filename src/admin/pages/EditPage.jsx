import { Link, useLocation, useParams } from "react-router-dom"
import { Button, Form } from "../components"
import { LayoutAdmin } from "../layout"
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useForm } from "../../auth/hooks";
import { findActualProject } from "../helpers";

export const EditPage = () => {

    const { adminProjectId } = useParams();
    const { projects } = useSelector( state => state.projects );

    const project = findActualProject( projects, adminProjectId );

    const { formState, handleInputChange } = useForm(project);

    return (
        <LayoutAdmin>
            <Link to={'/admin'}>
                <Button text={'Volver'} />
            </Link>

            <Form formState = { formState } handleInputChange={ handleInputChange }/>

        </LayoutAdmin>
    )
}

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