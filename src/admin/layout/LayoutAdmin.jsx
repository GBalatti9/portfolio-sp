import { motion, AnimatePresence } from 'framer-motion';

export const LayoutAdmin = ({ children }) => {
    return (
        <AnimatePresence>
            <motion.div
                className='min-h-screen bg-gray-200'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >

                {children}
            </motion.div>
        </AnimatePresence>
    )
}
