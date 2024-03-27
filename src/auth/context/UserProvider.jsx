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

    const login = async ( user ) => {
        setLoading( true );
        const dbUser = await loginFirestore( user );

        if (!dbUser || Object.keys(dbUser).length === 0) {
            const error = 'Credenciales incorrectas';
            const action = { types: types.error, payload: error };
            dispatch( action );
            return setLoading(false);
        };

        if (dbUser.password !== user.Contraseña) {
            const error = 'Credenciales incorrectas';
            const action = { types: types.error, payload: error };
            dispatch( action );
            return setLoading(false);
        }

        delete dbUser.password;
        const { email } = dbUser;
        const newUser   = { userName: email };
        const action    = { types: types.login, payload: newUser };
        dispatch( action );
        localStorage.setItem('user', JSON.stringify(email));
        setLoading( false );
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
