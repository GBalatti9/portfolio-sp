
import { NavBar } from "../../ui/components";
import { Layout } from "../layout";
import { motion, AnimatePresence } from 'framer-motion';


export const AboutPage = () => {
    return (
        <Layout>
            <AnimatePresence mode={'wait'}>
                <motion.div key="about" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.75, ease: 'easeInOut' }}>
                    <NavBar />
                    <div>About page</div>
                </motion.div>
            </AnimatePresence>
        </Layout>
    )
}
