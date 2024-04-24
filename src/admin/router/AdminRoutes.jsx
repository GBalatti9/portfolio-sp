import { AnimatePresence } from 'framer-motion'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AdminPage, EditPage } from '../pages'

export const AdminRoutes = () => {
    return (
        <AnimatePresence>
            <Routes>
                <Route path="/" element={<AdminPage />} />
                <Route path="/edit/:adminProjectId" exact={true} element={<EditPage />} />
            </Routes>
        </AnimatePresence>
    )
}
