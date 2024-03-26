import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";

export const loginFirestore = async ( user ) => {
    
    try {
        const usersRef = collection(db, 'usuarios')
        const q        = query(usersRef, where('email', '==', user.Nombre ))
        const querySnapshot = await getDocs(q);
        let dbUser = {}
        querySnapshot.forEach((doc) => {
            dbUser = doc.data();
        });
        
        if (dbUser.password === user.Contraseña) {
            return dbUser
        } else {
            return null;
        }
    } catch (error) {
        console.log( error );
    }

}



// return doc.id + " => " + doc.data();