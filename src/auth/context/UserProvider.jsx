import { useReducer } from 'react'
import { UserContext } from './UserContext'
import { userReducer } from './userReducer.js';
import { types } from '../types/types.js';

const initialState = {
    logged: false,
    user: null
}

export const UserProvider = ({ children }) => {

    const [ authState, dispatch ] = useReducer( userReducer, initialState )

    const login = ( user ) => {
        const { Nombre, Contraseña } = user;

        const newUser = { userName: Nombre, userPassword: Contraseña };

        const action = { types: types.login, payload: newUser };

        dispatch( action );
    }

    const logout = () => {
        dispatch({ types: types.logout, payload: {} })
    }
        return (
        <UserContext.Provider value={{ login, logout, authState }}>
            { children }
        </UserContext.Provider>
    )
}
