import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getDocuments } from '../../store/projects/thunks';

export const Layout = ({ children, overflow }) => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getDocuments());
    },[])

    return (
        <motion.div 
        initial    = {{ opacity: 0 }}
        animate    = {{ opacity: 1 }}
        exit       = {{ opacity: 0 }}
        transition = {{ duration: 0.5 }}
        className  = {`absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] transition-opacity ${overflow === 'auto' ? 'overflow-auto' : 'overflow-hidden'}`}>
            { children }
        </motion.div>
    )
}
