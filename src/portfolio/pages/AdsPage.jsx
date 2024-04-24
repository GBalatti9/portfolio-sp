
// import { useFetchHook } from '../../hooks';
import { LoadingSpinner, NavBar } from '../../ui/components'
import { WorkCard } from '../components'
import { Layout } from '../layout'

export const AdsPage = () => {

    // const { ads, loading } = useFetchHook();
    const { projects, isLoading: loading } = useSelector(( state ) => state.projects);
    
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
