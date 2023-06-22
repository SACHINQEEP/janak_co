import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { CssBaseline, Grid, Button, CardContent, Container, Box } from '@mui/material';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { motion } from "framer-motion"
import Carousel from 'react-material-ui-carousel'

import aboutUsPage from '../assets/about_us_home_page.svg'
import leftArrow from '../assets/arrow_left.svg'
import rightArrow from '../assets/arrow_right.svg'
import heroPage from '../assets/hero-page.svg';
import whyPage from '../assets/whyjc.svg'

import { BlogsPostList } from './Blogs/blogs.component';
import ServiceContent from './Services/content';
import AppCard from './shared/components/Card';
import AppSliderCard from './shared/components/sliderCard';


const LandingPage = () => {
    return (
        <>
            <Container maxWidth="xl">
                <CssBaseline />
                <Grid container component='main' sx={{ my: { xs: 7 }, display: 'flex', justifyContent: 'center' }}>
                    <Grid item xs={12} sm={6} lg={6} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', order: { xs: 2, sm: 1 } }}>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }} // Initial animation values
                            animate={{ opacity: 1, x: 0 }} // Animation values to transition to
                            transition={{ duration: 1.5 }} // Transition configuration
                        >
                            <Typography variant="h3" color="#1b1b1b" sx={{
                                fontSize: { xs: 28, sm: 20, md: 30, lg: 43 }, my: { xs: 2 }
                            }}>
                                Unleash the Power of<br /> <span style={{ color: '#f5821f' }}>Digital Marketing</span>  and Propel<br />
                                Your Brand to New Height
                            </Typography>

                            <Typography variant="h5" my={2} color="#746a6a" sx={{ fontSize: { xs: 19, md: 20, lg: 23 } }}>
                                Discover the art of strategic marketing,
                                driven by innovation and design things, to
                                drive exponential business growth
                            </Typography>
                            <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                                <Button variant='contained' sx={{ backgroundColor: '#f5821f', fontSize: { xs: 20, md: 20, xl: 30 }, my: { xs: 2 } }}>
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
                <Grid component='section' container mt={10} mb={3} sx={{}}>
                    <Grid item xs={12} sm={6} md={6} lg={4} xl={3} my={2}>
                        <CardContent>
                            <Typography variant="body2" color="#f5821f" sx={{ fontSize: { xs: 28, sm: 20, md: 30, lg: 40 }, fontWeight: 'bold' }}>
                                Our comprehensive services
                            </Typography>
                            <Link href='#' sx={{ fontWeight: 'bold', fontSize: '16px' }}>Learn More<ArrowRightAltIcon /></Link>
                        </CardContent>
                    </Grid>
                    {ServiceContent.map((list, i) => (
                        <AppCard title={list.title} content={list.content} src={list.src} cardAlt={list.cardAlt} key={i + 1} />
                    ))}
                </Grid >

                {/* Section AboutUs */}
                <Grid component='section' container sx={{}}>
                    <Grid item xs={12} sm={6} lg={6} md={6}>
                        <motion.div
                            initial={{ opacity: 0, x: -50 }} // Initial animation values
                            animate={{ opacity: 1, x: 0 }} // Animation values to transition to
                            transition={{ duration: 1.5 }} // Transition configuration
                        >
                            <img src={aboutUsPage} alt="aboutUs" />
                        </motion.div>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={6} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }} // Initial animation values
                            animate={{ opacity: 1, x: 0 }} // Animation values to transition to
                            transition={{ duration: 1.5 }} // Transition configuration
                        >
                            <Typography variant="h3" color="#f5821f" sx={{
                                fontSize: { xs: 25, sm: 25, md: 36, lg: 40 },
                            }}>
                                About Us
                            </Typography>
                            <Typography variant="h5" my={2} color="#746a6a" sx={{ fontSize: { xs: 14, sm: 16, md: 19 } }}>
                                Welcome to janak & co.. Where dreams soor and brands conquer. We are a premier digital marketing agency committed to empowering businesses/brnads to reach new heights of success in the everevolving online landscape. With a team of passionate experts driven by innovation, trust, bold strategies and confidence. We are committed to delivering outstanding results and empowering our clients to surpass their goals
                            </Typography>
                            <Link href='#' sx={{ fontWeight: 'bold', fontSize: '16px' }}>Learn More<ArrowRightAltIcon /></Link>
                        </motion.div>
                    </Grid>
                </Grid>

                {/* Why Section */}
                <Grid component='section' container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Grid item xs={12} sm={6} lg={6} md={6} sx={{ order: { xs: 2, sm: 1 } }}>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }} // Initial animation values
                            animate={{ opacity: 1, x: 0 }} // Animation values to transition to
                            transition={{ duration: 1.5 }} // Transition configuration
                        >
                            <Typography variant="h3" color="#f5821f" sx={{
                                fontSize: { xs: 25, sm: 25, md: 36, lg: 40 },
                            }}>
                                Why chosse Janak & Co.?<br />
                                Here what sets us apart
                            </Typography>
                            <Typography variant="h5" my={2} color="#746a6a" sx={{ fontSize: { xs: 14, sm: 16, md: 19 } }}>
                                Welcome to janak & co.. Where dreams soor and brands conquer. We are a premier digital marketing agency committed to empowering businesses/brnads to reach new heights of success in the everevolving online landscape. With a team of passionate experts driven by innovation, trust, bold strategies and confidence. We are committed to delivering outstanding results and empowering our clients to surpass their goals
                            </Typography>
                            <Link href='#' sx={{ fontWeight: 'bold', fontSize: '16px' }}>Learn More<ArrowRightAltIcon /></Link>
                        </motion.div>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={6} md={6} sx={{ alignSelf: 'center', order: { xs: 1, sm: 2 } }}>
                        <motion.div
                            initial={{ opacity: 0, x: -50 }} // Initial animation values
                            animate={{ opacity: 1, x: 0 }} // Animation values to transition to
                            transition={{ duration: 1.5 }} // Transition configuration
                        >
                            <img src={whyPage} alt="whyChoseJanak&co" />
                        </motion.div>
                    </Grid>
                </Grid>

                {/* Section Bogs */}
                <Box sx={{}}>
                    <Grid container spacing={0} my={5}>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h3" color="#f5821f" sx={{ fontSize: { xs: 25, md: 36, lg: 40 } }}>
                                Read Our Updated Blog Posts
                            </Typography>
                        </Grid>
                        <Grid item xs={6} sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'end' }}>
                            <Box sx={{ width: { xs: '20px', sm: '40px', md: '60px' }, mr: 2 }}>
                                <img src={leftArrow} alt="left arrow" />
                            </Box>
                            <Box sx={{ width: { xs: '20px', sm: '40px', md: '60px' } }}>
                                <img src={rightArrow} alt="right arrow" />
                            </Box>
                        </Grid>
                    </Grid>
                    <Carousel swipe={true}>
                        {BlogsPostList.map((list, i) => (
                            <Grid item key={i} xs={12} sm={6} md={4}>
                                <AppSliderCard
                                    title={list.title}
                                    description={list.description}
                                    imageLink={list.imageLink}
                                />
                            </Grid>
                        ))}
                    </Carousel>
                </Box>


            </Container >
        </>
    )
}


export default LandingPage