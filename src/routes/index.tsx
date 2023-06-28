import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from '../features/shared/components/navbar';
import AboutUsComponent from '../features/AboutUs/aboutUs.component';
import { ServicePageComponent } from '../features/Services/service.component';
import { BlogsPageComponent } from '../features/Blogs/blogs.component';
import { WhyUsPageComponent } from '../features/WhyUs/why-us.component';
import AppFooter from '../features/shared/components/footer';


const LandingPage = React.lazy(() => import('../features/landingPage'));

const AppRouters = () => {
    return (
        <>
            <Suspense fallback={<>Loading....</>}>
                <NavBar />
                <Routes>
                    <Route path='*' element={<LandingPage />} />
                    <Route path='/' element={<LandingPage />} />
                    <Route path='/about-us' element={<AboutUsComponent />} />
                    <Route path='/services' element={<ServicePageComponent />} />
                    <Route path='/blogs' element={<BlogsPageComponent />} />
                    <Route path='/contact-us' element={<LandingPage />} />
                    <Route path='/why-us' element={<WhyUsPageComponent />} />
                </Routes>
                <AppFooter />
            </Suspense>
        </>
    )
}

export default AppRouters;