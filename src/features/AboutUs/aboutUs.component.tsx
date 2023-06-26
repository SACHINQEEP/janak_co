import { Grid } from '@mui/material';
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
                        Welcome to janak & co.. Where dreams soor and brands conquer. We are a premier digital marketing agency committed to empowering businesses/brnads to reach new heights of success in the everevolving online landscape. With a team of passionate experts driven by innovation, trust, bold strategies and confidence. We are committed to delivering outstanding results and empowering our clients to surpass their goals
                    </Typography>
                    <Link style={{ fontWeight: 'bold', fontSize: '16px' }} to={'/about-us'}>Learn More  <ArrowRightAltIcon /></Link>
                </motion.div>
            </Grid>
        </Grid>
    )
}