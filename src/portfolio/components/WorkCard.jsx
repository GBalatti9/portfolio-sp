import { Button } from "../../admin/components/Button";
import { motion } from 'framer-motion';
import { useNavigate } from "react-router-dom";

export const WorkCard = ({ id, name, description, images, videos, visibility, project }) => {

    const navigate = useNavigate();

    const proyectPage = (id) => {
        navigate(`/${project}/${id}`)
    }

    return (
        <>
            <div className="overflow-hidden w-full h-48">
                {
                    videos.length > 0
                        ? <video className="w-full h-full object-cover" autoPlay muted playsInline loop> <source src={videos[0]} type="video/mp4" name="video" />  </video>
                        : <img src={images[0]} alt={name} className="w-full h-full object-cover" name="img" />
                }
            </div>
            {/* <div className="pl-2">
                <h2 className="font-bold text-2xl my-1 ">{name}</h2>
            </div> */}
        </>
    )
}

// <div className={`transition-all w-10/12 hover:shadow-lg mx-auto mb-2 cursor-pointer bg-white ${hoverIndex === index || hoverIndex === null ? '' : 'opacity-50'}`}
//     onClick={() => { proyectPage(id) }}
//     onMouseEnter={() => setHoverIndex(index)}
//     onMouseLeave={() => setHoverIndex(null)}
// >
{/* <div className="h-20 overflow-scroll px-1 overflow-x-hidden">
                    <p className="text-ellipsis text-sm">{ description }</p>
                </div> */}
// w-3/12
{/* <div className="pl-3">
        <Button color={'darkBlue'} text={"Don't click me"} />
    </div> */}