import { types } from "../types/types";


export const userReducer = ( state, action ) => {
    
    switch (action.types) {
        case types.login:
            return {
                ...state,
                logged: true,
                user: action.payload.userName
            }
            break;
    
        default:
            break;
    }
}
