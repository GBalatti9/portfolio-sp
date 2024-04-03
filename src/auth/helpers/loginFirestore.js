import { collection, getDocs, query, where } from "firebase/firestore";
import { auth, db } from "../../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { getData } from "./";

export const loginFirestore = async ({ Nombre, Contraseña }) => {

    try {
        const { user }        = await signInWithEmailAndPassword( auth, Nombre, Contraseña );
        // const { accessToken } = user;
        // const { uid }         = user;

        const { dbElements } = await getData();
        console.log({ dbElements });

        // Si user es true hay que retornar el usuario al provider para autenticarlo.
        return console.log( 'Usuario autenticado exitosamente' );
    } catch (error) {
        return console.error('Error al autenticar el usuario: ', user);
    }
    // try {
    //     const usersRef = collection(db, 'usuarios')
    //     const q        = query(usersRef, where('email', '==', user.Nombre ))
    //     const querySnapshot = await getDocs(q);
    //     let dbUser = {}
    //     querySnapshot.forEach((doc) => {
    //         dbUser = doc.data();
    //     });
        
    //     return dbUser;
    // } catch (error) {
    //     console.log( error );
    // }

}
