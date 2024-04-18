import { startUploadingImgsAndVds, uploadFirebase } from "./";


export const startUploadingFirebase = async ({ name, description, Imágenes: imgs, Videos: videos, visibility, project }) => {

    let imageUrls = [];
    let videoUrls = [];

    try {
        if (imgs?.length > 0) {
            imageUrls = await startUploadingImgsAndVds(imgs);
        };
        if (videos?.length > 0) {
            videoUrls = await startUploadingImgsAndVds(videos);
        };
        const formData = { name, description, imgs: imageUrls, videos: videoUrls, visibility, project }

        await uploadFirebase(formData);
        return { status: 'Uploaded correctly' };

    } catch (error) {
        console.error("Error en el archivo admin/helpers/startUploadingFirebase: ", error);
        return { status: 'Error' };
    } 
}