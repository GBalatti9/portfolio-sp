
// import { useFetchHook } from '../../hooks';
import { useSelector } from 'react-redux';
import { LoadingSpinner, NavBar } from '../../ui/components'
import { WorkCard } from '../components'
import { Layout } from '../layout'
import { filterDocuments } from '../../helpers/filterDocuments';

export const AdsPage = () => {

    // const { ads, loading } = useFetchHook();
    const { projects, isLoading: loading } = useSelector(( state ) => state.projects);
    const ads = filterDocuments( projects, 'ads' );
    return (
        <Layout overflow='auto'>
            <NavBar />
            <LoadingSpinner loading={loading}>
                <div className="sm:grid sm:grid-cols-2 md:grid-cols-3 sm:gap-y-2 mt-4">
                {
                    ads.length > 0 &&
                    ads?.map(( doc, i ) => (
                        <WorkCard key={ doc.id } { ...doc } />
                    ))
                }
                </div>
            </LoadingSpinner>
        </Layout>
    )
}
