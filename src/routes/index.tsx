import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from '../features/shared/components/navbar';
import { AboutUsPageComponent } from '../features/AboutUs/aboutUs.component';


const LandingPage = React.lazy(() => import('../features/landingPage'));

const AppRouters = () => {
    return (
        <>
            <Suspense fallback={<>Loading....</>}>
                <NavBar />
                <Routes>
                    <Route path='/' element={<LandingPage />} />
                    <Route path='/about-us' element={<AboutUsPageComponent />} />
                </Routes>
            </Suspense>
        </>
    )
}

export default AppRouters;