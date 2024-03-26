import { Route, Routes } from "react-router-dom"
import { HomePage } from "../main/pages";


export const AppRouter = () => {
    return (
        <Routes>

            <Route path="/" element={ <HomePage /> }/>

        </Routes>
    )
}
