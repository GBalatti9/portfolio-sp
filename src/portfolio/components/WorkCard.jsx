import { useState } from "react";
import { Button } from "../../admin/components/Button";
import { motion } from 'framer-motion';
import { useNavigate } from "react-router-dom";

export const WorkCard = ({ id, name, description, images, videos, visibility, project }) => {

    const navigate = useNavigate();

    const proyectPage = ( id ) => {
        navigate(`/${project}/${id}`)
    }

    return (
        <div className="transition-all rounded-md p-2 w-10/12 hover:shadow-lg mx-auto mb-2 cursor-pointer border bg-white" 
        onClick={(e) => { proyectPage(id)} }>
            <div className="rounded-sm overflow-hidden w-full h-48 border">
                {
                    videos.length > 0 
                    ? <video className="w-full h-full object-cover" autoPlay muted playsInline loop> <source src={videos[0]} type="video/mp4" name="video" />  </video> 
                    : <img src={images[0]} alt={name} className="w-full h-full object-cover" name="img"/>
                }
            </div>
            <div className="pl-2">
                <h2 className="font-bold text-2xl my-1 ">{ name }</h2>
                <div className="h-20 overflow-scroll px-1 overflow-x-hidden">
                    <p className="text-ellipsis text-sm">{ description }</p>
                </div>
            </div>
                <div className="pl-3">
                    <Button color={'darkBlue'} text={"Don't click me"} />
                </div>
        </div>
    )
}
// w-3/12