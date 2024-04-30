import { Link } from "react-router-dom";
import { WorkCard } from "../components";
import { useSelector } from "react-redux";
import { filterDocuments } from "../../helpers/filterDocuments";
import { useState } from "react";
import { LoadingSpinner } from "../../ui/components";

export const WorkContainer = ({ type }) => {

    const [ hoverIndex, setHoverIndex ] = useState(null);
    const [ underline, setUnderline ]   = useState(null);
    const { projects, isLoading: loading } = useSelector((state) => state.projects);
    const ads = filterDocuments(projects, type);

    return (
        <LoadingSpinner loading={loading}>
            <div className="sm:w-11/12 gap-10 mx-auto grid sm:grid-cols-3 mt-8">
                {
                    ads.length > 0 &&
                    ads?.map((doc, index) => (
                        <Link
                            to={`/${doc.id}`}
                            className={`transition-opacity duration-300 w-full h-48 hover:shadow-lg mx-auto cursor-pointer relative ${hoverIndex === index || hoverIndex === null ? '' : 'opacity-50'}`}
                            onMouseEnter={() => setHoverIndex(index)}
                            onMouseLeave={() => setHoverIndex(null)}
                            key={doc.id}
                        >
                            <WorkCard {...doc} />
                            <p className={`mt-2 text-blue-800 text-xs text-center sm:text-left`}>{ doc.name }</p>
                            {
                                hoverIndex === index &&
                                <div className='transition-opacity duration-300 absolute top-0 w-full h-full flex justify-center items-center bg-gray-950/70 text-white'>
                                    <p className='text-2xl'>{doc.name}</p>
                                </div>
                            }
                        </Link>
                    ))
                }
            </div>
        </LoadingSpinner>
    )
}
