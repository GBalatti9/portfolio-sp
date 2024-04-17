
import { AnimatePresence, motion } from "framer-motion";
import { useFetchHook } from "../../hooks";
import { LoadingSpinner, NavBar } from "../../ui/components";
import { Layout } from "../layout";
import { WorkCard } from "../components";
import { useEffect, useState } from "react";


export const WorkPage = () => {

    const { documents, loading } = useFetchHook();
    
    return (
        <Layout overflow='auto'>
            <NavBar />
            <LoadingSpinner loading={loading}>
                <div className="grid grid-cols-3 gap-y-2 mt-4">
                {
                    documents?.map(( doc, i ) => (
                        <WorkCard key={ doc.id } { ...doc } />
                    ))
                }
                </div>
            </LoadingSpinner>
        </Layout>
    )
}
