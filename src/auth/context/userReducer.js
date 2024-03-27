import { types } from "../types/types";


export const userReducer = ( state, action ) => {

    switch (action.types) {
        case types.login:
            return {
                ...state,
                logged: true,
                user: action.payload,
                error: null,
            }
        case types.logout:
            return {
                ...state,
                logged: false,
                user: null,
                error: null,
            }
        case types.error:
            return {
                ...state,
                logged: false,
                user: null,
                error: action.payload
            }

        default:
            break;
    }
}
