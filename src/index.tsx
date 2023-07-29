import App from './App'
import './index.scss'


// eslint-disable-next-line import/order
import createRoot from 'react-dom/client'
// import TagManager from 'react-gtm-module'

import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";

import React from 'react';


import ErrorPage from "../src/components/error";
import AboutUsComponent from '../src/features/AboutUs/aboutUs.component';
// import NavBar from '../src/features/shared/components/navbar';
import LandingPage from '../src/features/landingPage'
// import AppFooter from './features/shared/components/footer'
import ServiceComponent from './features/Services/service.component'
import BlogsComponent from './features/Blogs/blogs.component'
import ContactUsComponent from './features/ContactUs/contact-us.component'
import WhyUsComponent from './features/WhyUs/why-us.component'
import UserFaqs from './features/faqs/faq.component';



// const tagManagerArgs = {
//     gtmId: 'G-TCF7CZ4FGT'
// }

// TagManager.initialize(tagManagerArgs);


const routes = createBrowserRouter([
    {
        path: "*",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '',
                element: <LandingPage />
            },
            {
                path: 'about-us',
                element: <AboutUsComponent />
            },
            {
                path: 'services',
                element: <ServiceComponent />
            },
            {
                path: 'blogs',
                element: <BlogsComponent />
            },
            {
                path: 'contact-us',
                element: <ContactUsComponent />
            },
            {
                path: 'why-us',
                element: <WhyUsComponent />
            },
            {
                path: 'user-faqs',
                element: <UserFaqs />
            }
        ]
    },
]);


const container = document.getElementById('root')
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot.createRoot(container!)
root.render(
    <React.StrictMode>
        <RouterProvider router={routes} />
    </React.StrictMode>
)
