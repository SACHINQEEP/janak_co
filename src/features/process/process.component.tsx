// import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { CssBaseline, Grid, Box } from '@mui/material';

import Typography from '@mui/material/Typography';
import processContent from './process.content.json';

// import { motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { useEffect } from "react";


// const boxVariant = {
//     visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
//     hidden: { opacity: 0, y: 50 }
// };



export const ProcessComponent = () => {

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
        <Box >
            <CssBaseline />
            <Grid component='section' container spacing={{ xs: 5, md: 10 }} sx={{ pb: '5rem' }} >

                <Grid item xs={12} sx={{ width: '100%', display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
                    <Box sx={{ width: { md: '65%' }, mt: { xs: 5 } }}>
                        <Typography variant="h4" color='#f58634' sx={{ fontSize: { xs: '22px', md: '36px' }, fontWeigth: 700, lineHeight: '1.3em' }}>
                            Our Approach: Empowering Your Dreams, Elevating Your Brand
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sx={{ width: '100%', display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
                    <Box>
                        <Typography variant="h3" color='#746a6a' sx={{ fontSize: { xs: '16px', md: '25px' }, fontWeigth: 700, lineHeight: '1.3em' }}>
                            Welcome to Janak & Co., where innovative strategies meet boundless creativity, and digital success becomes a reality. Our approach is more than just a methodology; its a reflection of who we are and the values we hold dear. As a team of passionate digital marketing enthusiasts, were committed to transforming your dreams into soaring realities.
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sx={{ padding: { xs: '0px', md: '10px' }, display: 'flex', justifyContent: 'center' }}>
                    <Grid component='section' container spacing={0} sx={{ width: { md: '65%' } }}>
                        {processContent.map((el, i) => {
                            return (
                                <Box key={i + 1} my={5} sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, justifyContent: 'center' }}>
                                    <Grid item xs={12} sm={12} md={2} sx={{ padding: '20px' }}>
                                        <Box>
                                            <Typography variant="h3" color='rgba(47, 47, 47, 0.8)' sx={{ fontSize: 72, fontWeigth: 700, textAlign: { md: 'end', xs: el.conditon ? 'end' : 'start' } }}>0{i + 1}</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item border={1} xs={12} sm={12} md={10} sx={{
                                        borderColor: 'transparent',
                                        boxShadow: '0 2px 5px 2px rgba(0,0,0,0.3)',
                                        borderRadius: '5px', padding: '20px', fontSize: '13px', textAlign: 'start',
                                        lineHieght: '1.4px',
                                        backgroundColor: 'white'
                                    }}>
                                        <Box sx={{ width: '100%' }}>
                                            <Typography variant="h6" color='#2e2e2e' sx={{ py: { xs: 2, md: 1 }, fontSize: '16px', fontWeight: 700, textAlign: { xs: 'center', md: 'start' } }}>{el.title}</Typography>
                                            <Typography variant="h6" color='#746a6a' sx={{ fontSize: '16px', fontWeight: 700, textAlign: { xs: 'center', md: 'start' } }}>{el.description}</Typography>
                                        </Box>
                                    </Grid>
                                </Box>
                            )
                        })}
                    </Grid>
                </Grid>
                <Grid item xs={12} sx={{ width: '100%', display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
                    <Box>
                        <Typography variant="h3" color='#f58634' sx={{ fontSize: { xs: '16px', md: '25px' }, fontWeigth: 700, lineHeight: '1.3em' }}>
                            Ready to Soar Above the Rest?
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sx={{ width: '100%', display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
                    <Box>
                        <Typography variant="h3" color='#746a6a' sx={{ fontSize: { xs: '16px', md: '25px' }, fontWeigth: 700, lineHeight: '1.3em' }}>
                            Your dreams are our driving force, and your brands conquest is our ultimate pursuit. Lets unleash the power of digital marketing together and propel your brand to extraordinary heights. Connect with us today and let the journey to digital success begin!
                        </Typography>
                    </Box>
                </Grid>
            </Grid >
            {/* </motion.div> */}
        </Box>
    )
}

export default ProcessComponent;