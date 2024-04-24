import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase/config";

export const removeDocumentFromFirebase = async( id ) => {
    try {
        await deleteDoc(doc(db, 'portfolio', id));
        
        return { ok: 'Element removed' }
    } catch (error) {
        return error;
    }
}