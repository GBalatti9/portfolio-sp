import { getDocumentsFromFirebase } from "../../helpers/getDocumentsFromFirebase"
import { removeDocumentFromFirebase } from "../../helpers/removeFirebase";
import { setError, setItems, deleteDocument, startLoading } from "./projectsSlice"


export const getDocuments = () => {
    return async ( dispatch ) => {
        dispatch(startLoading());
        const { documents } = await getDocumentsFromFirebase();
        dispatch(setItems(documents))
    }
}

export const startDeletingDocument = ( documents, id ) => {
    return async ( dispatch ) => {
        console.log('click');
        dispatch(startLoading());
        const resp = await removeDocumentFromFirebase(id);
        // console.log({ ok });
        console.log({ resp });
        if ( resp.error ) {
            return dispatch(setError('No se pudo eliminar'))
        }
        let { documents } = await getDocumentsFromFirebase();
        console.log({ documents });
        dispatch(deleteDocument( documents ));
    }
}