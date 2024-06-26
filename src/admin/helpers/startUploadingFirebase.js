import { startUploadingImgsAndVds, uploadFirebase } from "./";


export const startUploadingFirebase = async ({ name, description, images, videos, visibility, project }) => {
    console.log({ name, description, images, videos, visibility, project });
    let imageUrls = [];
    let videoUrls = [];

    try {
        if (images?.length > 0) {
            imageUrls.push(...await startUploadingImgsAndVds(images));
        };
        if (videos?.length > 0) {
            videoUrls.push(...await startUploadingImgsAndVds(videos));
        };
        const formData = { name, description, images: imageUrls, videos: videoUrls, visibility, project }
        await uploadFirebase(formData);
        return { status: 'Uploaded correctly' };

    } catch (error) {
        console.error("Error en el archivo admin/helpers/startUploadingFirebase: ", error);
        return { status: 'Error' };
    } 
}