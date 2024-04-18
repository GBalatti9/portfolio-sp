import { motion, AnimatePresence } from 'framer-motion';

export const LayoutAdmin = ({ children }) => {
    return (
        <AnimatePresence>
            <motion.div
                className='min-h-screen bg-gray-200 w-12/12 px-2 overflow-x-hidden'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >

                {children}
            </motion.div>
        </AnimatePresence>
    )
}
