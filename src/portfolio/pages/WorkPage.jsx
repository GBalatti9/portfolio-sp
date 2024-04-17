
import { AnimatePresence, motion } from "framer-motion";
import { useFetchHook } from "../../hooks";
import { LoadingSpinner, NavBar } from "../../ui/components";
import { Layout } from "../layout";
import { WorkCard } from "../components";


export const WorkPage = () => {

    const { documents, loading } = useFetchHook();
    console.log({ documents });

    return (
        <Layout>
            <NavBar />
            <LoadingSpinner loading={loading}>
                <div className="grid grid-cols-3 gap-y-2 mt-4">
                {
                    documents?.map(( doc, i ) => (
                        <>
                        <WorkCard key={ doc.id } { ...doc } />
                        <WorkCard key={ doc.id } { ...doc } />
                        <WorkCard key={ doc.id } { ...doc } />
                        <WorkCard key={ doc.id } { ...doc } />
                        <WorkCard key={ doc.id } { ...doc } />
                        <WorkCard key={ doc.id } { ...doc } />
                        </>
                    ))
                }
                </div>
            </LoadingSpinner>
        </Layout>
    )
}
