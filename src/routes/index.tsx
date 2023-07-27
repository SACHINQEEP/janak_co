import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from '../features/shared/components/navbar';
import AboutUsComponent from '../features/AboutUs/aboutUs.component';
import ServiceComponent from '../features/Services/service.component';
import BlogsComponent from '../features/Blogs/blogs.component';
import WhyUsComponent from '../features/WhyUs/why-us.component';
import AppFooter from '../features/shared/components/footer';
import ContactUsComponent from '../features/ContactUs/contact-us.component';
import AppLoader from '../features/shared/components/loader';
import ScrollToTop from '../features/shared/components/ScrollToTop';
import UserFaqs from '../features/faqs/faq.component';
import PlaygroundSpeedDial from '../features/shared/components/speedDial'


const LandingPage = React.lazy(() => import('../features/landingPage'));

const AppRouters = () => {
    return (
        <>
            <Suspense fallback={<><AppLoader /></>}>
                <ScrollToTop />
                <NavBar />
                <PlaygroundSpeedDial />
                <Routes>
                    <Route element={<LandingPage />} path='/' />
                    <Route element={<AboutUsComponent />} path='/about-us' />
                    <Route element={<ServiceComponent />} path='/services' />
                    <Route element={<BlogsComponent />} path='/blogs' />
                    <Route element={<ContactUsComponent />} path='/contact-us' />
                    <Route element={<WhyUsComponent />} path='/why-us' />
                    <Route element={<UserFaqs />} path='/user-faqs' />
                </Routes>
                <AppFooter />
            </Suspense>
        </>
    )
}

export default AppRouters;