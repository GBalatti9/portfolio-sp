
import { useState } from "react";
import { NavBar } from "../../ui/components";
import { Layout } from "../layout";
import { motion, AnimatePresence } from 'framer-motion';


export const AboutPage = () => {

    return (
        <Layout>
                    <NavBar />
                    <div>About page</div>
        </Layout>
    )
}

{/* <AnimatePresence mode={'wait'} key="about">
                <motion.div key="about" initial={{ opacity: 0.4 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1, ease: 'easeInOut' }}>
                </motion.div>
            </AnimatePresence> */}
