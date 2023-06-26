import { CssBaseline, Grid, Button, Container, Box, Chip } from '@mui/material';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { motion } from "framer-motion"
import heroPage from '../assets/hero-page.svg';
import { BlogsPostList } from './Blogs/blogs.component';
import AppCustomCarousel from './shared/components/carousel';
import { ServicePageComponent } from './Services/service.component';
import { AboutUsPageComponent } from './AboutUs/aboutUs.component';
import { WhyUsPageComponent } from './WhyUs/why-us.component';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';


import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';

const navItems = [
    {
        name: 'Home',
        router: '/'
    },
    {
        name: 'Services',
        router: '/services'
    },
    {
        name: 'About',
        router: '/about-us'
    },
    {
        name: 'Blog',
        router: '/blogs'
    },
    {
        name: 'Contact',
        router: '/contact-us'
    }
]



const LandingPage = () => {

    return (
        <>
            <Container maxWidth="xl">
                <CssBaseline />
                <Grid container component='main' sx={{ minHeight: '85dvh', my: { xs: 5 }, display: 'flex', justifyContent: 'center' }}>
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
                <ServicePageComponent />

                {/* Section AboutUs */}
                <AboutUsPageComponent />

                {/* Why Section */}
                <WhyUsPageComponent />

                {/* Section Bogs */}
                <Box sx={{ pb: 10 }}>
                    <AppCustomCarousel data={BlogsPostList} />
                </Box>
            </Container >
            {/* Footer */}
            <Box sx={{ pt: 10, display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative' }}>
                <Box sx={{ position: 'absolute', left: '10%', top: '-10%', width: '80%', p: 5, borderRadius: 8, backgroundColor: '#f5821f', display: 'flex', flexDirection: 'column', textAlign: 'center', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography variant="h3" color="white" sx={{ fontSize: { xs: 30, md: 20, lg: 50, xl: 60 } }}>
                        <Chip label='Start' size='medium' variant="outlined" sx={{ padding: { xs: '0 0' }, fontSize: { xs: 10 } }} />  Growing
                    </Typography>
                    <Typography variant="h5" color="white" sx={{ my: 3, maxWidth: 400, fontSize: { xs: 16, md: 20 }, fontWeight: 300 }}>
                        Level Up Your Marketing Without Increasing  Your Headcount
                    </Typography>
                    <Button variant='contained' sx={{ backgroundColor: '#f6f5ee', color: 'grey', fontWeight: '200', fontSize: { xs: 15 }, my: { xs: 1, md: 2 } }}>
                        Work With Us
                    </Button>
                </Box>
                <Box sx={{ height: { xs: '50dvh', md: '45dvh', lg: '65dvh' }, backgroundColor: '#1b1b1b', display: 'flex', alignItems: 'end' }}>
                    <Grid container sx={{ alignItems: 'end' }}>
                        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Box maxWidth={150} sx={{}}>
                                <Typography variant="h5" color="white" sx={{ backgroundColor: '#f5821f', padding: '0 8px', borderRadius: '5px' }}>
                                    Janak & Co.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'start' }}>
                            <List sx={{ display: { xs: 'none', sm: 'block', md: 'flex' }, flexDirection: 'row', justifyContent: 'center', width: 350, }}>
                                {navItems.map((item, i) => (
                                    <ListItem key={i + 1} disablePadding >
                                        <ListItemButton sx={{ textAlign: 'center', color: 'white' }}>
                                            <ListItemText primary={item.name} />
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                            </List>
                        </Grid>
                        <Grid item xs={12} sx={{ color: 'white', mb: 2, display: 'flex', justifyContent: 'center' }}>
                            <FacebookOutlinedIcon sx={{ mr: 2 }} />
                            <TwitterIcon sx={{ mr: 2 }} />
                            <TwitterIcon sx={{ mr: 2 }} />
                            <TwitterIcon sx={{ mr: 2 }} />
                        </Grid>
                    </Grid>
                </Box>

            </Box >

        </>
    )
}


export default LandingPage