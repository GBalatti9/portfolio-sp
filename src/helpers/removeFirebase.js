import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase/config";

export const removeDocumentFromFirebase = async( name ) => {
    try {
        await deleteDoc(doc(db, 'portfolio', name));
        
        return { ok: 'Element removed' }
    } catch (error) {
        return error;
    }
}