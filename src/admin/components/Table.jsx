
import { LoadingSpinner } from "../../ui/components";
import { Button } from "./Button";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDocuments } from "../../store/projects/thunks";


const tableTitles = ['#', 'Name', 'Description', 'Images', 'Videos', 'Visibility', 'Delete', 'Edit']

export const Table = () => {
    const [ edit, setEdit ] = useState(false);

    const dispatch = useDispatch();
    const { isLoading: loading, projects: documents, error } = useSelector(( state ) => state.projects);

    useEffect(() => {
        dispatch(getDocuments());
    }, [])

    return (
        <LoadingSpinner loading = { loading }>
            <div className="overflow-x-auto">
                <div className="inline-block py-2 sm:px-6 lg:px-8 min-w-full">
                    <div className="rounded-md shadow-lg">
                    <table className="min-w-full text-sm font-light text-surface dark:text-white text-center">
                            <thead className="border border-neutral-200 bg-white font-medium dark:border-white/10 dark:bg-body-dark">
                                <tr>
                                    {tableTitles.map((title) => (<th className="px-6 py-4" key={title}>{title}</th>))}
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    documents?.length > 0 &&
                                    documents.map((doc) => (
                                        <>
                                        <tr className="border-b border-neutral-200 bg-white" key={doc.id}>
                                            {
                                                !edit ? 
                                                <>
                                                    <td className="whitespace-nowrap px-6 py-4 font-medium">{doc.id}</td>
                                                    <td className="whitespace-nowrap px-6 py-4 font-medium">{doc.name}</td>
                                                    <td className="px-6 py-4 font-medium whitespace-normal">{doc.description}</td>
                                                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                                                        {
                                                            doc.images > 0 &&
                                                            doc.images?.map((src) => (
                                                                <img src={src} alt={doc.name} key={src} width="100px" />
                                                            ))
                                                        }
                                                    </td>
                                                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                                                        {
                                                            Array.isArray(doc.videos) ? doc.videos.map((src) => (
                                                                <video className="w-full h-full object-cover" autoPlay muted playsInline key={ src }>
                                                                    <source src={src} type="video/mp4" />
                                                                        Tu navegador no soporta el elemento de video.
                                                                </video>
                                                            ))
                                                            :
                                                            doc.videos
                                                        }
                                                    </td>
                                                    <td className="whitespace-nowrap px-6 py-4 font-medium">{doc.visibility ? 'True' : 'False'}</td>
                                                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                                                        <Button text={'X'} color={'blue'} onClick={ () => deleteDocument( doc.id ) }/>
                                                    </td>
                                                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                                                        <Button text={'Edit'} color={'blue'} onClick={ () => setEdit( !edit ) }/>
                                                    </td>
                                                </>
                                                : 
                                                <>
                                                    <td className="overflow-hidden">
                                                        <input type="text" className="outline-none py-3 px-2" value={ doc.id } />
                                                    </td>
                                                    <td className="overflow-hidden">
                                                        <input type="text" className="outline-none py-3 px-2" value={ doc.name } />
                                                    </td>
                                                    <td className="overflow-hidden">
                                                        <input type="text" className="outline-none py-3 px-2" value={ doc.description } />
                                                    </td>
                                                    <td className="overflow-hidden">
                                                        <input type="text" className="outline-none py-3 px-2" value={ doc.description } />
                                                    </td>
                                                    <td className="overflow-hidden">
                                                        <input type="text" className="outline-none py-3 px-2" value={ doc.description } />
                                                    </td>
                                                    <td className="overflow-hidden">
                                                        <input type="text" className="outline-none py-3 px-2" value={ doc.description } />
                                                    </td>
                                                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                                                        <Button text={'X'} color={'blue'} onClick={ () => deleteDocument( doc.id ) }/>
                                                    </td>
                                                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                                                        <Button text={'Guardar'} color={'blue'} onClick={ () => setEdit( !edit ) }/>
                                                    </td>
                                                </>
                                            }
                                        </tr>
                                        </>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </LoadingSpinner>
    )
}
