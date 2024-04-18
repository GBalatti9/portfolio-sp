import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from 'framer-motion';

import { AboutPage, AdsPage, ContactPage, HomePage, ProyectPage, WorkPage } from "../pages";

export const PortfolioRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<HomePage />} />

                <Route path="personal projects" element={<WorkPage />} />
                <Route path="ads" element={<AdsPage />} />

                <Route path=":projects/:workId" element={<ProyectPage />} />

                <Route path="about" element={<AboutPage />} />
                <Route path="contact" element={<ContactPage />} />

                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </AnimatePresence>
    )
}
