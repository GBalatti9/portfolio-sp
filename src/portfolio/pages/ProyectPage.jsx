import { useLocation, useParams } from "react-router-dom"
import { Layout } from "../layout";
import { NavBar } from "../../ui/components";
import { getDocument } from "../../helpers/getDocument";
import { useEffect, useState } from "react";


export const ProyectPage = () => {
    const [ document, setDocument ] = useState({})

    const location = useParams();

    const { document: doc } = getDocument(location.workId);

    useEffect(() => {
        setDocument(doc)
    }, [])

    return (
        <Layout overflow='auto'>
            <NavBar />
            <p>{document?.name}</p>
        </Layout>
    )
}
