import { Box, Grid, Container, CssBaseline } from '@mui/material';
import Typography from '@mui/material/Typography';
import { motion } from "framer-motion"
import aboutUsPage from '../../assets/about_us_home_page.svg'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Link } from 'react-router-dom';



export const AboutUsPageComponent = () => {

    return (
        <Grid component='section' container sx={{ pr: { md: 2 }, minHeight: { xs: '90dvh', md: '85dvh', lg: '85dvh', xl: '10dvh' }, }}>
            <Grid item xs={12} sm={6} lg={6} md={6} sx={{ mt: { xs: 5 } }}>
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
                        fontSize: { xs: 30, md: 36, lg: 40 },
                    }}>
                        About Us
                    </Typography>
                    <Typography variant="h5" my={2} color="#746a6a" sx={{ fontSize: { xs: 16, md: 19 } }}>
                        Welcome to Janak & Co., where dreams soar and brands conquer. We are a premier digital marketing agency committed to empowering businesses/brand to reach new heights of success in the ever-evolving online landscape. With a team of passionate experts driven by innovation, trust, bold strategies and confidence, we are committed to delivering outstanding results and empowering our clients to surpass their goals.
                    </Typography>
                    <Link style={{ fontWeight: 'bold', fontSize: '16px' }} to={'/about-us'}>Learn More  <ArrowRightAltIcon /></Link>
                </motion.div>
            </Grid>
        </Grid>
    )
}

const AboutUsComponent = () => {
    return (
        <div style={{ margin: '0 0 6rem 0' }}>
            <Container maxWidth="xl">
                <CssBaseline />
                <Box sx={{ paddingBottom: '100px' }}>
                    <AboutUsPageComponent />
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
        </div>
    )
}

export default AboutUsComponent;