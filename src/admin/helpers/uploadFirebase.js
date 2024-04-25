
import { setDoc, doc } from "firebase/firestore";
import { db } from "../../firebase/config";


export const uploadFirebase = async ( formData ) => {

    if(Object.values(formData).length === 0) return;

    const { name, description, images, videos, visibility, project } = formData;
    console.log({ name });
    const idName = name.toLowerCase().split(' ').join('-');
    console.log({ idName });

    try {
        await setDoc(doc(db, 'portfolio', idName), {
            name:        name,
            description: description,
            images:      images?.length === 0   ? 'No images' : images,
            videos:      videos?.length === 0 ? 'No videos' : videos,
            visibility:  visibility,
            project:     project.toLowerCase(),
        });

    } catch (error) {
        console.error('Hubo un error en el archivo uploadFirebase.js: ', error);
    }

}