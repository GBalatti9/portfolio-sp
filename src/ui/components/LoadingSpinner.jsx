import { motion, AnimatePresence } from 'framer-motion';

export const LoadingSpinner = ({ loading, children }) => {

    return (
        <>
            {loading
                ?
                <>
                    {/* <motion.div className='opacity-50' key='loading-child'
                    initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} transition={{ duration: 0.75 }}
                    > {children} </motion.div> */}
                    <AnimatePresence mode='wait'>
                        <motion.div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center border border-red-600"
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.75 }} exit={{ opacity: 0 }}>
                            <p className='ml-2'>Loading...</p>
                        </motion.div>
                    </AnimatePresence>
                </>
                :
                <AnimatePresence mode='wait'>
                    <motion.div key='loaded' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.75 }} exit={{ opacity: 0 }}>
                        {children}
                    </motion.div>
                </AnimatePresence>
            }
        </>

    )
}
