import { uploadImagesAndVideos } from "./";

export const startUploadingFiles = async ( files ) => {
    if (!files.length === 0) return;

    const fileUploadPromises = [];
    for (const file of files) {
        fileUploadPromises.push(uploadImagesAndVideos(file));
    }
    const secureUrls =  await Promise.all(fileUploadPromises);
    return secureUrls;
}