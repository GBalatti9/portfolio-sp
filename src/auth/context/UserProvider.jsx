import React from 'react'
import { UserContext } from './UserContext'

export const UserProvider = ({ children }) => {

    const user = 'Salvador Posse'
    return (
        <UserContext.Provider value={{ user }}>
            { children }
        </UserContext.Provider>
    )
}
