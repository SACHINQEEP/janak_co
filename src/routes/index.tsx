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
import AppWhatsapp from '../features/shared/components/whatsapp';
import ScrollToTop from '../features/shared/components/ScrollToTop';
import LabelBottomNavigation from '../features/shared/components/bottomNav';


const LandingPage = React.lazy(() => import('../features/landingPage'));

const AppRouters = () => {
    return (
        <>
            <Suspense fallback={<><AppLoader /></>}>
                <ScrollToTop />
                <NavBar />
                <AppWhatsapp />

                <Routes>
                    <Route path='*' element={<LandingPage />} />
                    <Route path='/' element={<LandingPage />} />
                    <Route path='/about-us' element={<AboutUsComponent />} />
                    <Route path='/services' element={<ServiceComponent />} />
                    <Route path='/blogs' element={<BlogsComponent />} />
                    <Route path='/contact-us' element={<ContactUsComponent />} />
                    <Route path='/why-us' element={<WhyUsComponent />} />
                </Routes>
                <AppFooter />
                <LabelBottomNavigation />
            </Suspense>
        </>
    )
}

export default AppRouters;