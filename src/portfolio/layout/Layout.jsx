import { motion } from 'framer-motion';

export const Layout = ({ children }) => {
    return (
        <motion.div 
        initial    = {{ opacity: 0 }}
        animate    = {{ opacity: 1 }}
        exit       = {{ opacity: 0 }}
        transition = {{ duration: 0.5 }}
        className  = "absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] transition-opacity border border-red-600 overflow-hidden">
            { children }
        </motion.div>
    )
}
