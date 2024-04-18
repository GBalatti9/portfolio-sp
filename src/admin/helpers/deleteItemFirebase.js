import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase/config";

export const deleteItemFirebase = async ( id ) => {

    try {
        const itemRef = doc(db, 'portfolio', id)
        console.log({ itemRef });
        await deleteDoc(itemRef);
        localStorage.removeItem('documents');
        return true;
    } catch (error) {
        console.error('Error en admin/helpers/deleteItemFirebase: ', error);
    }

}