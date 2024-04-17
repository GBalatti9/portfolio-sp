import { useLocation, useParams } from "react-router-dom"
import { Layout } from "../layout";
import { NavBar, ToggleMenuBtn } from "../../ui/components";
import { getDocument } from "../../helpers/getDocument";
import { useEffect, useRef, useState } from "react";


export const ProyectPage = () => {
    const [ docObj, setDocument ] = useState({})

    const location = useParams();

    const { document: doc } = getDocument(location.workId);

    useEffect(() => {
        setDocument(doc)
    }, [])

    return (
        <Layout overflow='auto'>
            <NavBar />
            <p>{docObj?.name}</p>
            <ToggleMenuBtn />
        </Layout>
    )
}
