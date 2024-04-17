import { useState } from "react";
import { Button } from "../../admin/components/Button";
import { motion } from 'framer-motion';
import { useNavigate } from "react-router-dom";

export const WorkCard = ({ id, name, description, images, videos, visibility }) => {
    
    const [ counter, setCounter ] = useState(0);

    const navigate = useNavigate();

    const nextImage = ( counter ) => {
        if (counter === images.length) {
            return setCounter(0);
        }
        return setCounter(counter + 1);
    }

    const proyectPage = ( id ) => {
        navigate(`/work/${id}`)
    }

    return (
        <div className="transition-all rounded-md p-2 w-10/12 hover:shadow-lg mx-auto mb-2 cursor-pointer border bg-white" onClick={() => proyectPage(id) }>
            <div className="rounded-sm overflow-hidden w-full h-48 border" onClick={() => nextImage(counter) }>
                <img src={images[counter]} alt={name} className="w-full h-full object-cover" />
            </div>
            <div className="pl-2">
                <h2 className="font-bold text-2xl my-1">{ name }</h2>
                <div className="h-20 overflow-scroll px-1 overflow-x-hidden">
                    <p className="text-ellipsis text-sm">{ description }</p>
                </div>
                <div>
                    <Button color={'darkBlue'} text={"Don't click me"} />
                </div>
            </div>
        </div>
    )
}
// w-3/12