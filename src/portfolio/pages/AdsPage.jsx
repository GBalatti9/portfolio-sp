
// import { useFetchHook } from '../../hooks';
import { useSelector } from 'react-redux';
import { LoadingSpinner, NavBar } from '../../ui/components'
import { WorkCard } from '../components'
import { Layout } from '../layout'
import { filterDocuments } from '../../helpers/filterDocuments';
import { useState } from 'react';

export const AdsPage = () => {

    const [hoverIndex, setHoverIndex] = useState(null);

    const { projects, isLoading: loading } = useSelector((state) => state.projects);
    const ads = filterDocuments(projects, 'ads');

    return (
        <Layout overflow='auto'>
            <NavBar />
            <LoadingSpinner loading={loading}>
                <div className="sm:w-11/12 md:w-8/12 mx-auto grid sm:grid-cols-3 border mt-8">
                    {
                        ads.length > 0 &&
                        ads?.map((doc, index) => (
                            <div className={`transition-opacity duration-300 w-full h-48 hover:shadow-lg mx-auto cursor-pointer relative ${hoverIndex === index || hoverIndex === null ? '' : 'opacity-50'}`}
                                onClick={() => { proyectPage(id) }}
                                onMouseEnter={() => setHoverIndex(index)}
                                onMouseLeave={() => setHoverIndex(null)}
                                key={doc.id}
                            >
                                <WorkCard {...doc} />
                                {
                                    hoverIndex === index &&
                                    <div className='transition-opacity duration-300 absolute top-0 w-full h-full flex justify-center items-center bg-gray-950/70 text-white'>
                                        <p className='text-2xl'>{doc.name}</p>
                                    </div>
                                }
                            </div>
                        ))
                    }
                </div>
            </LoadingSpinner>
        </Layout>
    )
}
