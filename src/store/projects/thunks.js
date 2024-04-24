import { deleteDocumentSync } from "../../helpers";
import { getDocumentsFromFirebase } from "../../helpers/getDocumentsFromFirebase"
import { removeDocumentFromFirebase } from "../../helpers/removeFirebase";
import { setError, setItems, startLoading } from "./projectsSlice"


export const getDocuments = () => {
    return async ( dispatch ) => {
        dispatch(startLoading());
        const { documents } = await getDocumentsFromFirebase();
        dispatch(setItems(documents))
    }
}

export const deleteDocument = ( documents, name ) => {
    return async ( dispatch ) => {
        console.log('click');
        dispatch(startLoading());
        const resp = await removeDocumentFromFirebase(name);
        // console.log({ ok });
        console.log({ resp });
        if ( resp.error ) dispatch(setError('No se pudo eliminar'))
        if ( resp.ok    ) dispatch(setError('No se pudo eliminar'))
        const newDocs = deleteDocumentSync( documents, name );
        dispatch( deleteDocument(newDocs) )
    }
}