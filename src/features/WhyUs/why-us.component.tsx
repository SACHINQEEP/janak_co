import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { CssBaseline, Grid, Container } from '@mui/material';

import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { motion } from "framer-motion"

import Strategic from '../../assets/why choose us icon/Strategic Vision.svg'
import Comprehensive from '../../assets/why choose us icon/Comprehensive Services.svg'
import Driven from '../../assets/why choose us icon/Data-Driven Insights.svg'
import Creative from '../../assets/why choose us icon/Creative Brilliance.svg'
import Transparent from '../../assets/why choose us icon/Transparent Collaboration.svg'
import Measurable from '../../assets/why choose us icon/Measurable Results.svg'
import Value from '../../assets/why choose us icon/Value for Investment.svg'


import whyPage from '../../assets/whyjc.svg'
import AppCard from '../shared/components/Card';

export const Content = [
    {
        title: 'Strategic Vision',
        content: `We don't believe in one-size-fits-all approaches. Instead, we analyse your business objectives, target market, and industry landscape to develop a comprehensive digital marketing strategy that aligns with your goals.`,
        src: Strategic,
        cardAlt: 'Strategic'
    },
    {
        title: 'Comprehensive Services',
        content: `We offer a comprehensive suite of digital marketing services under one roof. From SEO and PPC to social media management and content creation, we have the expertise and resources to handle all aspects of your online presence, providing a seamless and integrated approach.`,
        src: Comprehensive,
        cardAlt: 'Comprehensive'
    },
    {
        title: 'Data-Driven Insights',
        content: `Our decisions are backed by extensive market research and data analysis. We dive deep into your brand's performance metrics, consumer behaviour, and industry trends to optimize campaigns for maximum impact.`,
        src: Driven,
        cardAlt: 'Driven'
    },
    {
        title: 'Creative Brilliance',
        content: `We understand the power of storytelling. Our team of talented creatives, copywriters, and designers collaborate to produce engaging and visually stunning content that leaves a lasting impression`,
        src: Creative,
        cardAlt: 'Creative'
    },
    {
        title: 'Transparent Collaboration',
        content: `We believe in building strong partnerships with our clients. Throughout the entire process, we maintain open lines of communication, providing regular updates, detailed reports, and insights to ensure you're always informed about your campaign's progress.`,
        src: Transparent,
        cardAlt: 'Transparent'
    },
    {
        title: 'Measurable Results',
        content: `Our ultimate goal is to deliver real, measurable results. We focus on key performance indicators (KPIs) that matter most to your business, such as increased website traffic, higher conversion rates, and improved brand visibility.`,
        src: Measurable,
        cardAlt: 'Measurable'
    },
    {
        title: 'Value for Investment',
        content: `We understand the importance of your budget. Our services are designed to provide maximum value for your investment. We optimize campaigns to achieve the best possible return on investment (ROI) and help you achieve your business objectives without unnecessary spending.`,
        src: Value,
        cardAlt: 'Value'
    },
]



export const WhyUsPageComponent = () => {
    return (
        <Grid component='section' container sx={{ pl: { md: 2 }, minHeight: { xs: '100dvh', md: '85dvh', lg: '85dvh', xl: '10dvh' }, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Grid item xs={12} sm={6} lg={6} md={6} sx={{ order: { xs: 2, sm: 1 } }}>
                <motion.div
                    initial={{ opacity: 0, x: 50 }} // Initial animation values
                    animate={{ opacity: 1, x: 0 }} // Animation values to transition to
                    transition={{ duration: 1.5 }} // Transition configuration
                >
                    <Typography variant="h3" color='#f58634' sx={{
                        fontSize: { xs: 28, md: 36, lg: 40 },
                    }}>
                        Why chosse Janak & Co.?<br />
                        Here what sets us apart
                    </Typography>
                    <Typography variant="h5" my={2} color="#746a6a" sx={{ fontSize: { xs: 16, md: 18 }, fontWeight: 400 }}>
                        At Janak & Co., we understand that choosing the right digital marketing agency is crucial for the success of your business. With numerous options available, its essential to partner with a team that not only delivers results but also aligns with your vision and values. We pride ourselves on being a trusted and reliable partner that goes above and beyond to help our clients soar above their competition. With our unwavering commitment to innovation, trust, and bold strategies, we are dedicated to transforming your digital presence and empowering your brand to conquer new horizons.
                    </Typography>
                    <Link to={'/why-us'} style={{ fontWeight: 'bold', fontSize: '16px' }}>Learn More<ArrowRightAltIcon /></Link>
                </motion.div>
            </Grid>
            <Grid item xs={12} sm={6} lg={6} md={6} sx={{ order: { xs: 1, sm: 2 } }}>
                <motion.div
                    initial={{ opacity: 0, x: -50 }} // Initial animation values
                    animate={{ opacity: 1, x: 0 }} // Animation values to transition to
                    transition={{ duration: 1.5 }} // Transition configuration
                >
                    <img src={whyPage} alt="whyChoseJanak&co" />
                </motion.div>
            </Grid>
        </Grid>
    )
}

const WhyUsComponent = () => {
    return (
        <div style={{ margin: '0 0 6rem 0' }}>
            <Container maxWidth="xl">
                <CssBaseline />
                <WhyUsPageComponent />

                <Grid component='section' container mt={10} sx={{}}>
                    {Content.map((list, i) => (
                        <AppCard title={list.title} content={list.content} src={list.src} cardAlt={list.cardAlt} key={i + 1} />
                    ))}
                </Grid>
            </Container>
        </div>
    )
};

export default WhyUsComponent;