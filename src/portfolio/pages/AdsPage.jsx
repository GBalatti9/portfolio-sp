
// import { useFetchHook } from '../../hooks';
import { useSelector } from 'react-redux';
import { NavBar } from '../../ui/components';
import { WorkContainer } from '../components';
import { Layout } from '../layout';
import { useState } from 'react';

export const AdsPage = () => {

    return (
        <Layout overflow='auto'>
            <NavBar />
            <WorkContainer type='ads' />
        </Layout>
    )
}

{/* <div className="sm:w-11/12 md:w-8/12 mx-auto grid sm:grid-cols-3 mt-8">
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
            {
                hoverIndex === index &&
                <div className='transition-opacity duration-300 absolute top-0 w-full h-full flex justify-center items-center bg-gray-950/70 text-white'>
                    <p className='text-2xl'>{doc.name}</p>
                </div>
            }
        </Link>
    ))
}
</div> */}