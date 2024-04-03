import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";


export const getData = async () => {

    try {
        const portfolioCollection = collection(db, 'portfolio');
        const querySnapshot = await getDocs(portfolioCollection);

        let dbElements = [];
        querySnapshot.forEach((doc) => {
            dbElements.push({ id: doc.id, data: doc.data() })
        });

        return { dbElements };
    } catch (error) {
        console.log(error);
    }

}