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






const LandingPage = () => {

    return (
        <div style={{ margin: '0 0 6rem 0' }}>
            <Container maxWidth="lg">
                <CssBaseline />
                <Grid container component='main' sx={{ minHeight: { xs: '85dvh', md: '85dvh', lg: '85dvh', xl: '20dvh' }, my: { xs: 5 }, display: 'flex', justifyContent: 'center' }}>
                    <Grid item xs={12} sm={6} lg={6} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', order: { xs: 2, sm: 1 } }}>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }} // Initial animation values
                            animate={{ opacity: 1, x: 0 }} // Animation values to transition to
                            transition={{ duration: 1.5 }} // Transition configuration
                        >
                            <Typography variant="h3" color="#1b1b1b" sx={{
                                fontSize: { xs: 28, sm: 20, md: 30, lg: 43 }, my: { xs: 2 }
                            }}>
                                Unleash the Power of<br /> <span style={{ color: '#f58634' }}>Digital Marketing</span>  and Propel<br />
                                Your Brand to New Height
                            </Typography>

                            <Typography variant="h5" my={2} color="#746a6a" sx={{ fontSize: { xs: 19, md: 20, lg: 23 } }}>
                                Discover the art of strategic marketing,
                                driven by innovation and design things, to
                                drive exponential business growth
                            </Typography>
                            <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                                <Button variant='contained' sx={{ backgroundColor: '#f58634', fontSize: { xs: 20, md: 20, xl: 30 }, my: { xs: 2 }, padding: '10px 50px' }}>
                                    Get Started
                                </Button>
                            </motion.div>
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

                {/* Section Services */}
                <ServicePageComponent isRequired={true} />

                {/* Section AboutUs */}
                <AboutUsPageComponent contentName='About Us' order={false} image={aboutUsPage} />

                {/* Why Section */}
                <WhyUsPageComponent />

                {/* Section Bogs */}
                <Box sx={{ pb: 10 }} >
                    <AppCustomCarousel data={BlogsPostList} />
                </Box>
            </Container >
        </div>
    )
}


export default LandingPage