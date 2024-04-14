
import { setDoc, doc } from "firebase/firestore";
import { db } from "../../firebase/config";


export const uploadFirebase = async ( formData ) => {

    if(Object.values(formData).length === 0) return;

    const { name, description, imgs, videos } = formData;

    const idName = name.toLowerCase().split(' ').join('-');

    try {
        await setDoc(doc(db, 'portfolio', idName), {
            name: name,
            description: description,
            images: imgs.length === 0   ? 'No images' : imgs,
            videos: videos.length === 0 ? 'No videos' : videos,
        })
    } catch (error) {
        console.log('Hubo un error en el archivo uploadFirebase.js: ', error);
    }

}