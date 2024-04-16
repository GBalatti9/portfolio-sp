import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

export const getDocumentsFromFirebase = async () => {

    let documents = [];

    try {
        const querySnapshot = await getDocs(collection(db, "portfolio"));
        querySnapshot.forEach((doc) => {
            const document = {
                id: doc.id,
                ...doc.data(),
            }
            documents.push(document);
        });

        return { documents };
    } catch (error) {
        console.error('Error en admin/helpers/getDocumentsFromFirestore: ', error);
    }

}