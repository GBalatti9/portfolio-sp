import { useReducer, useState } from 'react'
import { UserContext } from './UserContext'
import { userReducer } from './userReducer.js';
import { types } from '../types/types.js';
import { loginFirestore } from '../helpers';

const initialState = {
    logged: false,
    user: null
}

export const UserProvider = ({ children }) => {

    const [ authState, dispatch ] = useReducer( userReducer, initialState );
    const [ loading, setLoading ] = useState(false);

    const login = async ( user ) => {
        setLoading( true );
        const dbUser = await loginFirestore( user );
        if (!dbUser) return null;

        const { email, password } = dbUser;
        const newUser = { userName: email, userPassword: password };
        const action  = { types: types.login, payload: newUser };
        dispatch( action );
        setLoading(false);
    }

    const logout = () => {
        dispatch({ types: types.logout, payload: {} })
    }
        return (
        <UserContext.Provider value={{ login, logout, authState, loading }}>
            { children }
        </UserContext.Provider>
    )
}
