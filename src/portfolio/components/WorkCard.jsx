import { Button } from "../../admin/components/Button";


export const WorkCard = ({ name, description, images, videos, visibility }) => {
    console.log({ name, description, images, videos, visibility });
    return (
        <div className="transition-all rounded-md p-2 w-10/12 hover:shadow-lg mx-auto mb-2 cursor-pointer">
            <img src={`${images[0]}`} alt={name} className="rounded-sm overflow-hidden"/>
            <h2 className="font-bold text-2xl my-1">{ name }</h2>
            <div className="h-28 overflow-scroll px-3">
                <p className="text-ellipsis">{ description }</p>
            </div>
            <div className="flex justify-end pr-8">
                <Button color={'darkBlue'} text={"Don't click me"} />
            </div>
        </div>
    )
}
// w-3/12