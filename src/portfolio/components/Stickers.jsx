import { useEffect, useState } from "react"


export const Stickers = () => {
    const [giphy, setGiphy] = useState(null)

    const fetchGiphy = async () => {

        try {
            const response = await fetch("https://api.giphy.com/v1/stickers/search?api_key=KriECD4MOUR9tDrRjhEI5U0b8U30hoJc&q=walking horse&limit=1");
            const { data } = await response.json();
            setGiphy(data[0].images.preview_webp);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchGiphy();
    }, []);
    return (
        <div>
            <img src={giphy?.url} alt="" width={120}/>
        </div>
    )
}
