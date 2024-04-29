import { useLocation, useParams } from "react-router-dom"
import { Layout } from "../layout";
import { NavBar, ToggleMenuBtn } from "../../ui/components";
import { getDocument } from "../../helpers/getDocument";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { filterDocuments } from "../../helpers/filterDocuments";


export const ProyectPage = () => {
    const { projects, isLoading: loading } = useSelector(( state ) => state.projects);
    const personal = filterDocuments( projects, 'personal-project' );

    console.log({ personal });
    return (
        <Layout overflow='auto'>
            <NavBar />
            <p>Hola</p>
            {/* <p>{docObj?.name}</p> */}
            <ToggleMenuBtn />
        </Layout>
    )
}
