
import { Layout } from "../layout";
import { NavBar, ToggleMenuBtn } from "../../ui/components";
import { WorkContainer } from "../components";

export const ProyectPage = () => {

    return (
        <Layout overflow='auto'>
            <NavBar />
            <WorkContainer type={'personal-project'} />

            {/* <ToggleMenuBtn /> */}
        </Layout>
    )
}
