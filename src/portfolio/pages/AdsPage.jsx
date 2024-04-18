
import { useFetchHook } from '../../hooks';
import { LoadingSpinner, NavBar } from '../../ui/components'
import { WorkCard } from '../components'
import { Layout } from '../layout'

export const AdsPage = () => {
    const { documents, loading } = useFetchHook();
    
    return (
        <Layout overflow='auto'>
            <NavBar />
            <LoadingSpinner loading={loading}>
                <div className="sm:grid sm:grid-cols-2 md:grid-cols-3 sm:gap-y-2 mt-4">
                {
                    documents?.map(( doc, i ) => (
                        <>
                        <WorkCard key={ doc.id } { ...doc } />
                        <WorkCard key={ 1 } { ...doc } />
                        <WorkCard key={ 2 } { ...doc } />
                        <WorkCard key={ 3 } { ...doc } />
                        </>
                    ))
                }
                </div>
            </LoadingSpinner>
        </Layout>
    )
}
