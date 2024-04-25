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

    const { formState, handleInputChange, handleResetForm } = useForm(project);

    return (
        <LayoutAdmin>
            <Link to={'/admin'}>
                <Button text={'Volver'} color={'darkBlue'} />
            </Link>
            {
                !project 
                ? 
                <div className="h-96 flex justify-center items-center">
                    <p>No se pudo cargar. Volvé para atras y reingresá</p>
                </div>
                : <Form formState = { formState } handleInputChange={ handleInputChange } handleResetForm = { handleResetForm }/>
            }

        </LayoutAdmin>
    )
}