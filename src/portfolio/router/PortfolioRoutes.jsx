import { Navigate, Route, Routes } from "react-router-dom"
import { AboutPage, HomePage, WorkPage } from "../pages"

export const PortfolioRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />}/>

            <Route path="work" element={<WorkPage />}/>
            <Route path="about" element={<AboutPage />}/>
            
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}