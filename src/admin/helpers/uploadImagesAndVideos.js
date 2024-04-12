
export const uploadImagesAndVideos = async (file) => {

    const cloudURL = `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_ID}/upload`
    const formData = new FormData();
    formData.append('upload_preset', 'portfolio_imgs_vds');
    formData.append('file', file);
    console.log(file);
    try {
        const response = await fetch(cloudURL, {
            method: 'POST',
            body: formData
        })
        
        console.log({ response });
        if (!response.ok) {
            throw new Error(response);
        }

        const cloudResponse = await response.json();
        return cloudResponse.secure_url;

    } catch (error) {
        throw new Error(error);
    }
}