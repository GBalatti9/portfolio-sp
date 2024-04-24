import { getDocumentsFromFirebase } from "../../helpers/getDocumentsFromFirebase"
import { setItems, startLoading } from "./projectsSlice"


export const getDocuments = () => {
    return async ( dispatch ) => {
        dispatch(startLoading());
        const { documents } = await getDocumentsFromFirebase();
        dispatch(setItems(documents))
    }
}