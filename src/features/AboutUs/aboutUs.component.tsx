import { Box, Grid, Container, CssBaseline, Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import aboutUsContent from '../../assets/AboutUsPage.svg'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Link } from 'react-router-dom';

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

interface Data {
    contentName: string
    order: boolean
    image: any
}

const boxVariant = {
    visible: { opacity: 1, x: 0, transition: { duration: 1.2 } },
    hidden: { opacity: 0, x: -80 }
};

const rightContnet = {
    visible: { opacity: 1, x: 0, transition: { duration: 1.2 } },
    hidden: { opacity: 0, x: -80 }
}

export const AboutUsPageComponent = ({ contentName, order, image }: Data) => {

    const control = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });


    useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    }, [control, inView]);


    const imageItemOrder = order ? { xs: 1, sm: 2, md: 2, lg: 2, xl: 2 } : { xs: 1, sm: 1, md: 1, lg: 1, xl: 1 };
    const ItemOrder = order ? { xs: 2, sm: 1, md: 1, lg: 1, xl: 1 } : { xs: 2, sm: 2, md: 2, lg: 2, xl: 2 };

    return (
        <Grid component='section' id='about-section' container sx={{ pr: { md: 2 }, minHeight: { xs: '90dvh', md: '50dvh', lg: '50dvh', xl: '10dvh' }, }}>
            <Grid item xs={12} sm={6} lg={6} md={6} sx={{ mt: { xs: 5 }, order: imageItemOrder }}>
                <motion.div
                    className="box"
                    ref={ref}
                    variants={boxVariant}
                    initial="hidden"
                    animate={control}
                >

                    <img src={image} alt="aboutUs" />
                </motion.div>
            </Grid>
            <Grid item xs={12} sm={6} lg={6} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', order: ItemOrder }}>
                <motion.div
                    className="box"
                    ref={ref}
                    variants={rightContnet}
                    initial="hidden"
                    animate={control}
                >
                    <Typography variant="h3" color='#f58634' sx={{
                        fontSize: { xs: 30, md: 36, lg: 40 },
                    }}>
                        {contentName}
                    </Typography>
                    <Typography variant="h5" my={2} color="#746a6a" sx={{ fontSize: { xs: 16, md: 18 }, fontWeight: 300 }}>
                        Welcome to Janak & Co., where dreams soar and brands conquer. We are a premier digital marketing agency committed to empowering businesses/brand to reach new heights of success in the ever-evolving online landscape. With a team of passionate experts driven by innovation, trust, bold strategies and confidence, we are committed to delivering outstanding results and empowering our clients to surpass their goals.
                    </Typography>
                    {order === false
                        ? <Link style={{ fontWeight: 'bold', fontSize: '14px' }} to={'/about-us'}>Learn More  <ArrowRightAltIcon /></Link>
                        : <Button variant='contained' sx={{ backgroundColor: '#f5821f', fontSize: { xs: 20, md: 20, xl: 30 }, my: { xs: 2 }, padding: '10px 50px' }}>
                            Get Started
                        </Button>
                    }
                </motion.div>
            </Grid>
        </Grid>
    )
}

const AboutUsComponent = () => {
    return (
        <Box sx={{ margin: '0 0 6rem 0', padding: { md: '0 2rem' } }}>
            <Container maxWidth="xl">
                <CssBaseline />
                <Box sx={{ paddingBottom: '100px' }}>
                    <AboutUsPageComponent contentName='Welcome to Janak & Co.' order={true} image={aboutUsContent} />
                    <Box>
                        <Typography variant="h5" my={2} color="#746a6a" sx={{ fontSize: { xs: 16, md: 19 }, fontWeight: 300 }}>
                            <span style={{ color: '#f5821f' }}>At Janak & Co.,</span>  we believe in the power of strategic marketing, design thinking, creativity, and cutting-edge technology. Our mission is to transform your brand s online presence, amplify its reach, drive measurable growth and bring automation in the process. We understand that every brand has a unique story to tell and aspirations to achieve. With our expertise in strategic digital marketing, we transform dreams into reality by crafting powerful online campaigns that captivate audiences and drive tangible results.
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant="h5" my={2} color="#746a6a" sx={{ fontSize: { xs: 16, md: 19 }, fontWeight: 300 }}>
                            Our team of seasoned professionals specializes in a wide range of digital marketing disciplines, including search engine optimization (SEO), pay-per-click advertising (PPC), social media marketing, content creation, campaign management and web design & development. We understand that every business is unique, and that &rsquo;s why we tailor our solutions to match your specific needs and objectives that resonate with your target audience and propel your brand forward.
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant="h5" my={2} color="#746a6a" sx={{ fontSize: { xs: 16, md: 19 }, fontWeight: 300 }}>
                            What sets us apart is our unwavering commitment to excellence. We go above and beyond to understand your brand, industry, and target audience, allowing us to craft tailored strategies that resonate and deliver remarkable results. We measure our success by the success of our clients, and we take pride in being a trusted partner on their digital journey.
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant="h5" my={2} color="#746a6a" sx={{ fontSize: { xs: 16, md: 19 }, fontWeight: 300 }}>
                            Collaboration and transparency are at the heart of our approach. We value strong relationships and work closely with our clients, keeping them informed every step of the way. Your success is our success, and we are dedicated to building long-lasting partnerships built on trust, integrity, confidence and mutual growth.
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant="h5" my={2} color="#746a6a" sx={{ fontSize: { xs: 16, md: 19 }, fontWeight: 300 }}>
                            Discover the possibilities that digital marketing holds for your brand. Join hands with Janak & Co. and let us propel your business to new heights. Together, as a brand we will conquer the market landscape, exceed your goals, and transform dreams into reality.
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default AboutUsComponent;