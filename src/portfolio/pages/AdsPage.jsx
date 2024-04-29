
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
