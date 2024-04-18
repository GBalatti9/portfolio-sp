
import { AnimatePresence, motion } from "framer-motion";
import { useFetchHook } from "../../hooks";
import { LoadingSpinner, NavBar, ToggleMenuBtn } from "../../ui/components";
import { Layout } from "../layout";
import { WorkCard } from "../components";
import { useEffect, useState } from "react";


export const WorkPage = () => {

    const { projects, loading } = useFetchHook();
    
    return (
        <Layout overflow='auto'>
            <NavBar />
            <LoadingSpinner loading={loading}>
                <div className="sm:grid sm:grid-cols-2 md:grid-cols-3 sm:gap-y-2 mt-4">
                {
                    projects?.map(( doc, i ) => (
                        <>
                        <WorkCard key={ doc.id } { ...doc } />
                        <WorkCard key={ 1 } { ...doc } />
                        <WorkCard key={ 2 } { ...doc } />
                        <WorkCard key={ 3 } { ...doc } />
                        </>
                    ))
                }
                </div>
            </LoadingSpinner>
        </Layout>
    )
}
