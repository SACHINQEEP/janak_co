// import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { CssBaseline, Grid, Container, Box } from '@mui/material';

// import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
// import { motion } from "framer-motion"

import { Link as ScrollLink } from 'react-scroll';
import Strategic from '../../assets/why choose us icon/Strategic Vision.svg'
import Comprehensive from '../../assets/why choose us icon/Comprehensive Services.svg'
import Driven from '../../assets/why choose us icon/Data-Driven Insights.svg'
import Creative from '../../assets/why choose us icon/Creative Brilliance.svg'
import Transparent from '../../assets/why choose us icon/Transparent Collaboration.svg'
import Measurable from '../../assets/why choose us icon/Measurable Results.svg'
import Value from '../../assets/why choose us icon/Value for Investment.svg'

// import { motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { useEffect } from "react";


// import whyPage from '../../assets/whyjc.svg'
import AppCard from '../shared/components/Card';


// const boxVariant = {
//     visible: { opacity: 1, x: 0, transition: { duration: 1.2 } },
//     hidden: { opacity: 0, x: 80 }
// };

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

    // const control = useAnimation();
    // const [ref, inView] = useInView({
    //     triggerOnce: true,
    //     threshold: 0.3,
    // });

    // useEffect(() => {
    //     if (inView) {
    //         control.start("visible");
    //     } else {
    //         control.start("hidden");
    //     }
    // }, [control, inView]);

    return (
        // <Grid component='section' container sx={{ pl: { sm: 2, md: 0, lg: 0 }, minHeight: { xs: '100dvh', sm: '75vh', md: '20dvh', lg: '20vh', xl: '10dvh' }, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        //     <Grid item xs={12} sm={6} lg={6} md={6} sx={{ order: { xs: 2, sm: 1 } }}>
        //         <motion.div
        //             className="box"
        //             ref={ref}
        //             variants={boxVariant}
        //             initial="hidden"
        //             animate={control}
        //         >
        //             <Typography variant="h3" color='#f58634' sx={{
        //                 fontSize: { xs: 28, md: 36, lg: 40 },
        //             }}>
        //                 Why chosse Janak & Co.?<br />
        //                 Here what sets us apart
        //             </Typography>
        //             <Typography variant="h5" my={2} color="#746a6a" sx={{ fontSize: { xs: 16, md: 18 }, fontWeight: 400 }}>
        //                 At Janak & Co., we understand that choosing the right digital marketing agency is crucial for the success of your business. With numerous options available, its essential to partner with a team that not only delivers results but also aligns with your vision and values. We pride ourselves on being a trusted and reliable partner that goes above and beyond to help our clients soar above their competition. With our unwavering commitment to innovation, trust, and bold strategies, we are dedicated to transforming your digital presence and empowering your brand to conquer new horizons.
        //             </Typography>
        //             <Link to={'/why-us'} style={{ fontWeight: 'bold', fontSize: '16px' }}>Learn More<ArrowRightAltIcon /></Link>
        //         </motion.div>
        //     </Grid>
        //     <Grid item xs={12} sm={6} lg={6} md={6} sx={{ order: { xs: 1, sm: 2 } }}>
        //         <motion.div
        //             className="box"
        //             ref={ref}
        //             variants={boxVariant}
        //             initial="hidden"
        //             animate={control}
        //         >
        //             <img src={whyPage} alt="whyChoseJanak&co" />
        //         </motion.div>
        //     </Grid>
        // </Grid>
        <Box >
            {/* <motion.div
                className="box"
                ref={ref}
                variants={boxVariant}
                initial="hidden"
                animate={control}
            > */}
            <Grid component='section' container spacing={{ xs: 5, md: 10 }} >

                <Grid item xs={12} sx={{ width: '100%', display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
                    <Box sx={{ width: { md: '65%' }, my: { xs: 5 } }}>
                        <Typography variant="h4" color='#f58634' sx={{ fontSize: { xs: '22px', md: '36px' }, fontWeigth: 700, lineHeight: '1.3em' }}>
                            How our process creates a foundation for predictable & aggressive growth, without any limit to the revenue
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sx={{ padding: '10px', display: 'flex', justifyContent: 'center' }}>
                    <Grid component='section' container spacing={0} sx={{ width: { md: '65%' } }}>
                        <Grid item xs={12} sm={12} md={2} sx={{ padding: '20px' }}>
                            <Box>
                                <Typography variant="h3" color='rgba(47, 47, 47, 0.8)' sx={{ fontSize: 72, fontWeigth: 700, textAlign: 'end' }}>01</Typography>
                            </Box>
                        </Grid>
                        <Grid item border={1} xs={12} sm={12} md={10} sx={{
                            borderColor: 'transparent',
                            boxShadow: '0 2px 5px 2px rgba(0,0,0,0.3)',
                            borderRadius: '5px', padding: '20px', fontSize: '13px', textAlign: 'start',
                            lineHieght: '1.4px'
                        }}>
                            <Box sx={{ width: '100%' }}>
                                <Typography variant="h6" color='#2e2e2e' sx={{ fontSize: '16px', fontWeight: 700 }}>Bringing out Brands right message -</Typography>
                                <Typography variant="h6" color='rgba(47, 47, 47, 0.84)' sx={{ fontSize: '16px', fontWeight: 700 }}>We dont just immediately take over your marketing. We first take a look at your overall brand, because we communicate to your audience what your business is - thats how they become long time retained customers. </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sx={{ padding: '10px', display: 'flex', justifyContent: 'center' }}>
                    <Grid component='section' container spacing={0} sx={{ width: { md: '65%' } }}>
                        <Grid item xs={12} sm={12} md={2} sx={{ padding: '20px' }}>
                            <Box>
                                <Typography variant="h3" color='rgba(47, 47, 47, 0.8)' sx={{ fontSize: 72, fontWeigth: 700, textAlign: { md: 'end' } }}>02</Typography>
                            </Box>
                        </Grid>
                        <Grid item border={1} xs={12} sm={12} md={10} sx={{
                            borderColor: 'transparent',
                            boxShadow: '0 2px 5px 2px rgba(0,0,0,0.3)',
                            borderRadius: '5px', padding: '20px', fontSize: '13px', textAlign: 'start',
                            lineHieght: '1.4px'
                        }}>
                            <Box sx={{ width: '100%' }}>
                                <Typography variant="h6" color='#2e2e2e' sx={{ fontSize: '16px', fontWeight: 700 }}>Establishing the pillars of long term marketing -</Typography>
                                <Typography variant="h6" color='rgba(47, 47, 47, 0.84)' sx={{ fontSize: '16px', fontWeight: 700 }}>
                                    No matter the stage of your marketing - small effort or scaling, we first establish the strong pillars of understanding based on the data that future efforts can strongly stand on to grow you rapidly without stress of crumbling down.</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sx={{ padding: '10px', display: 'flex', justifyContent: 'center' }}>
                    <Grid component='section' container spacing={0} sx={{ width: { md: '65%' } }}>
                        <Grid item xs={12} sm={12} md={2} sx={{ padding: '20px' }}>
                            <Box>
                                <Typography variant="h3" color='rgba(47, 47, 47, 0.8)' sx={{ fontSize: 72, fontWeigth: 700, textAlign: 'end' }}>03</Typography>
                            </Box>
                        </Grid>
                        <Grid item border={1} xs={12} sm={12} md={10} sx={{
                            borderColor: 'transparent',
                            boxShadow: '0 2px 5px 2px rgba(0,0,0,0.3)',
                            borderRadius: '5px', padding: '20px', fontSize: '13px', textAlign: 'start',
                            lineHieght: '1.4px'
                        }}>
                            <Box sx={{ width: '100%' }}>
                                <Typography variant="h6" color='#2e2e2e' sx={{ fontSize: '16px', fontWeight: 700 }}>Growth -</Typography>
                                <Typography variant="h6" color='rgba(47, 47, 47, 0.84)' sx={{ fontSize: '16px', fontWeight: 700 }}>
                                    Now we roll out full execution plan, focusing on strategic implementation and scalable opportunities. This is where we actually move towards getting you towards your goal numbers. </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sx={{ padding: '10px', display: 'flex', justifyContent: 'center' }}>
                    <Grid component='section' container spacing={0} sx={{ width: { md: '65%' } }}>
                        <Grid item xs={12} sm={12} md={2} sx={{ padding: '20px' }}>
                            <Box>
                                <Typography variant="h3" color='rgba(47, 47, 47, 0.8)' sx={{ fontSize: 72, fontWeigth: 700, textAlign: { md: 'end' } }}>04</Typography>
                            </Box>
                        </Grid>
                        <Grid item border={1} xs={12} sm={12} md={10} sx={{
                            borderColor: 'transparent',
                            boxShadow: '0 2px 5px 2px rgba(0,0,0,0.3)',
                            borderRadius: '5px', padding: '20px', fontSize: '13px', textAlign: 'start',
                            lineHieght: '1.4px'
                        }}>
                            <Box sx={{ width: '100%' }}>
                                <Typography variant="h6" color='#2e2e2e' sx={{ fontSize: '16px', fontWeight: 700 }}>Full Control -</Typography>
                                <Typography variant="h6" color='rgba(47, 47, 47, 0.84)' sx={{ fontSize: '16px', fontWeight: 700 }}>Its finally time to put your foot on the gas paddle and give control of your business in your hand. From this point onwards, we focus heavily on retaining the customers and also deciding month on month plans.

                                    Imagine the power of scaling or slowing your business any month you want.</Typography>
                            </Box>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid >
            {/* </motion.div> */}
        </Box>
    )
}

const WhyUsComponent = () => {
    return (
        <ScrollLink to="cardSection" smooth={true} duration={500} offset={-100}>
            <Box sx={{ margin: '0 0 6rem 0', padding: { md: '0 2rem' } }}>
                <Container maxWidth="xl">
                    <CssBaseline />
                    <WhyUsPageComponent />

                    <Grid id="cardSection" component='section' container mt={10} sx={{}}>
                        {Content.map((list, i) => (
                            <AppCard title={list.title} content={list.content} src={list.src} cardAlt={list.cardAlt} key={i + 1} />
                        ))}
                    </Grid>
                </Container>
            </Box>
        </ScrollLink>
    )
};

export default WhyUsComponent;