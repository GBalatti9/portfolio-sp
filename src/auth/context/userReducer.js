import { types } from "../types/types";


export const userReducer = ( state, action ) => {

    switch (action.types) {
        case types.login:
            return {
                ...state,
                logged: true,
                user: action.payload.userName
            }
        case types.logout:
            return {
                ...state,
                logged: false,
                user: null,
            }
            break;

        default:
            break;
    }
}
