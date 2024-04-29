
import { Layout } from "../layout";
import { NavBar, ToggleMenuBtn } from "../../ui/components";
import { WorkContainer } from "../components";
import { useLocation, useParams } from "react-router-dom";
import { getDocument } from "../../helpers";
import { useEffect } from "react";

export const ProyectPage = () => {

    const { workId } = useParams();

    const { document } = getDocument( workId );

    console.log({ document });

    return (
        <Layout overflow='auto'>
            <NavBar />

        </Layout>
    )
}
