
import { LoadingSpinner } from "../../ui/components";
import { useFetchHook } from "../../hooks";
import { Button } from "./Button";


const tableTitles = ['#', 'Name', 'Description', 'Images', 'Videos', 'Visibility', 'Borrar']

export const Table = () => {
    const { documents, loading, deleteDocument } = useFetchHook();
    console.log({ loading });

    return (
        <LoadingSpinner loading = { loading }>
        <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="overflow-hidden border rounded-md shadow-lg">
                        <table
                            className="min-w-full text-sm font-light text-surface dark:text-white text-center">
                            <thead className="border border-neutral-200 bg-white font-medium dark:border-white/10 dark:bg-body-dark">
                                <tr>
                                    {tableTitles.map((title) => (<th className="px-6 py-4" key={title}>{title}</th>))}
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    documents?.length > 0 &&
                                    documents.map((doc) => (
                                        <tr className="border-b border-neutral-200 bg-white" key={doc.id}>
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
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        </LoadingSpinner>
    )
}
