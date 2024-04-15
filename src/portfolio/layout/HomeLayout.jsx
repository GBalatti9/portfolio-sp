import { NavBar } from "../../ui/components"
import { Layout } from "./"
import { motion, AnimatePresence } from 'framer-motion';

export const HomeLayout = ({ children, menuVisible }) => {
    return (
        <>
            <Layout>
                <AnimatePresence mode={'wait'}>
                    <motion.div key="home" initial={{ opacity: 0.2 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.75, ease: 'easeInOut' }}>
                        <div className={`${menuVisible ? 'translate-y-20' : ''} transition-transform duration-500 ease-out absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}>
                            {children}
                        </div>
                        <div className={`absolute top-0 left-0 right-0 transition-transform duration-500 ease-out transform ${menuVisible ? 'translate-y-0' : 'translate-y-[-60px]'}`}>
                            <NavBar />
                        </div>
                    </motion.div>
                </AnimatePresence>
            </Layout>
        </>
    )
}

