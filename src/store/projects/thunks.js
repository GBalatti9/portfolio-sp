import { compareDocuments } from "../../helpers";
import { getDocumentsFromFirebase } from "../../helpers/getDocumentsFromFirebase"
import { removeDocumentFromFirebase } from "../../helpers/removeFirebase";
import { setError, setItems, deleteDocument, startLoading } from "./projectsSlice"


export const getDocuments = () => {
    return async ( dispatch ) => {
        dispatch(startLoading());
        const documentsFromLs = JSON.parse(localStorage.getItem('documents'));
        if (!documentsFromLs) {
            const { documents } = await getDocumentsFromFirebase();
            localStorage.setItem('documents', JSON.stringify(documents));
            dispatch(setItems( documents ));
        } else {
            dispatch(setItems( documentsFromLs ));
        }
    }
}

export const startDeletingDocument = ( id ) => {
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
        localStorage.setItem('documents', JSON.stringify(documents));
        console.log({ documents });
        dispatch(deleteDocument( documents ));
    }
}