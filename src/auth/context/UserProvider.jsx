import { useReducer, useState } from 'react'
import { UserContext } from './UserContext'
import { userReducer } from './userReducer.js';
import { types } from '../types/types.js';
import { loginFirestore } from '../helpers';

const init = () => {
    const userInLs = JSON.parse(localStorage.getItem('user')) || null;
    return {
        logged: !!userInLs,
        user: userInLs,
        error: null
    }
}

const initialState = {
    logged: false,
    user: null
}

export const UserProvider = ({ children }) => {

    const [ authState, dispatch ] = useReducer( userReducer, initialState, init );
    const [ loading, setLoading ] = useState(false);

    const login = async ( userForm ) => {
        setLoading( true );
        const dbUser = await loginFirestore( userForm );
        
        if (!dbUser || Object.keys(dbUser).length === 0) {
            const error = 'Credenciales incorrectas';
            const action = { types: types.error, payload: error };
            dispatch( action );
            return setLoading(false);
        };
        
        const { user } = dbUser;
        const action    = { types: types.login, payload: user };
        dispatch( action );
        localStorage.setItem('user', JSON.stringify(user));
        setLoading( false );
        return console.log({dbUser});
    }

    const logout = () => {
        const action = { types: types.logout, payload: null };
        dispatch( action );
        localStorage.removeItem('user');
    }
        return (
        <UserContext.Provider value={{ login, logout, authState, loading }}>
            { children }
        </UserContext.Provider>
    )
}
