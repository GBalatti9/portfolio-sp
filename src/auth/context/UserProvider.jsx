import React, { useState } from 'react'
import { UserContext } from './UserContext'

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState('');

    const login = ( user ) => {
        console.log(user);
        // setUser( user )
    }
        return (
        <UserContext.Provider value={{ user, login }}>
            { children }
        </UserContext.Provider>
    )
}
