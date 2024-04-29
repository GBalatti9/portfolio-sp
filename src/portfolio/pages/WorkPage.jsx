

// ESTE ARCHIVO ESTA INUTILIZADO
import { useSelector } from 'react-redux';
import { LoadingSpinner, NavBar } from '../../ui/components'
import { Layout } from '../layout'
import { WorkContainer } from '../components';

export const WorkPage = () => {

    return (
        <Layout overflow='auto'>
            <NavBar />
            <WorkContainer type={'projects'} />
        </Layout>
    )
}


