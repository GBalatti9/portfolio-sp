
import { useFetchHook } from "../../hooks";
import { LoadingSpinner, NavBar, ToggleMenuBtn } from "../../ui/components";
import { Layout } from "../layout";
import { WorkCard } from "../components";


export const WorkPage = () => {

    const { projects, loading } = useFetchHook();
    
    return (
        <Layout overflow='auto'>
            <NavBar />
            <LoadingSpinner loading={loading}>
                <div className="sm:grid sm:grid-cols-2 md:grid-cols-3 sm:gap-y-2 mt-4">
                {
                    projects.length > 0 && 
                    projects?.map(( doc, i ) => (
                        <WorkCard key={ doc.id } { ...doc } />
                    ))
                }
                </div>
            </LoadingSpinner>
        </Layout>
    )
}
