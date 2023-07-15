import { CssBaseline, Grid, Button, Container, Box } from '@mui/material';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { motion } from "framer-motion"
import heroPage from '../assets/hero-page.svg';
import { BlogsPostList } from './Blogs/blogs.component';
import AppCustomCarousel from './shared/components/carousel';
import { ServicePageComponent } from './Services/service.component';
import { AboutUsPageComponent } from './AboutUs/aboutUs.component';
import { WhyUsPageComponent } from './WhyUs/why-us.component';
import aboutUsPage from '../assets/about_us_home_page.svg'
import { useNavigate } from 'react-router';
// import { useInView } from 'react-intersection-observer';
// import ReactGA from 'react-ga';
// import { useEffect } from 'react'






const LandingPage = () => {

    const navigate = useNavigate();
    const isSmallScreen = window.innerWidth < 600;

    const handleGetStarted = () => {
        navigate('/contact-us')
    }

    return (
        <Box sx={{ margin: '0 0 6rem 0', padding: { md: '0 2rem' } }}>
            <Container maxWidth="xl">
                <CssBaseline />
                <Grid container component='main' sx={{ minHeight: { xs: '85dvh', md: '85dvh', lg: '85dvh', xl: '20dvh' }, my: { xs: 5 }, display: 'flex', justifyContent: 'center' }}>
                    <Grid item xs={12} sm={6} lg={6} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', order: { xs: 2, sm: 1 } }}>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }} // Initial animation values
                            animate={{ opacity: 1, x: 0 }} // Animation values to transition to
                            transition={{ duration: 1.5 }} // Transition configuration
                        >
                            <Typography variant="h3" color="#1b1b1b" sx={{
                                fontSize: { xs: "30px", sm: '22px', md: '30px', lg: '43px' }, my: { xs: 2 }, textAlign: { xs: 'center', md: 'start' }
                            }}>
                                Unleash the Power of  {!isSmallScreen && <br />}  <span style={{ color: '#f58634' }}>Digital Marketing</span> and Propel  {!isSmallScreen && <br />}
                                Your Brand to New Height
                            </Typography>

                            <Typography variant="h5" my={2} color="#746a6a" sx={{ fontSize: { xs: "17px", md: '20px', lg: '23px' }, textAlign: { xs: 'center', md: 'start' } }}>
                                Discover the art of strategic marketing,
                                driven by innovation and design things, to
                                drive exponential business growth
                            </Typography>
                            {/* <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}> */}
                            <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'start' } }}>
                                <Button onClick={handleGetStarted} variant='contained' sx={{ backgroundColor: '#f58634', fontSize: { xs: '18px', md: '20px', xl: '30px' }, my: { xs: 2 }, padding: '10px 50px' }}>
                                    Get Started
                                </Button>
                            </Box>
                            {/* </motion.div> */}
                        </motion.div>
                    </Grid>
                    <Divider />
                    <Grid item xs={12} sm={6} lg={6} md={6} sx={{ mt: { xs: 5 }, order: { xs: 1, sm: 2 } }}>
                        <motion.div
                            initial={{ opacity: 0, x: -50 }} // Initial animation values
                            animate={{ opacity: 1, x: 0 }} // Animation values to transition to
                            transition={{ duration: 1.5 }} // Transition configuration
                        >
                            <img src={heroPage} alt="hero-page" />
                        </motion.div>
                    </Grid>
                </Grid>


                <ServicePageComponent isRequired={true} />
                <AboutUsPageComponent contentName="About Us" order={false} image={aboutUsPage} />
                <WhyUsPageComponent />

                {/* Section Blogs */}
                <Box>
                    <AppCustomCarousel data={BlogsPostList} />
                </Box>
            </Container >
        </Box>
    )
}


export default LandingPage