import { Button, Container, CssBaseline, FormControl, FormLabel, Grid, Box, TextField, Typography } from '@mui/material';
import { AboutUsPageComponent } from '../AboutUs/aboutUs.component';
import contactImage from '../../assets/Contact.svg'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';


const ContactUsComponent = () => {
    return (
        <div style={{ margin: '0 0 6rem 0' }}>
            <Container maxWidth="xl">
                <CssBaseline />
                <AboutUsPageComponent contentName='Get in Touch with Janak & Co.' order={true} image={contactImage} />
                {/* <Container maxWidth="xl"> */}
                <Grid container spacing={0} sx={{ backgroundColor: 'white', borderRadius: '25px', my: { xs: 10 }, py: { xs: 1, md: 1.5, lg: 3 }, px: { xs: 2, lg: 2 }, }}>
                    <Grid item xs={12} md={12} lg={6} sx={{ px: { lg: 3 } }}>
                        <Typography variant="h5" color="initial" sx={{ fontSize: { xs: 20, md: 22, lg: 28 }, mt: 5, py: 1, px: { lg: 5 } }}>
                            Let &apos;s have a conversation about your unique goals and challenges. We &apos;re all ears.
                        </Typography>
                        <Typography variant="h6" color="initial" sx={{ color: 'grey', fontWeight: 300, fontSize: { xs: 16, md: 18, ld: 20 }, mb: 2, px: { lg: 5 } }}>
                            At Janak & Co., we value open communication and are committed to providing exceptional customer service.
                        </Typography>

                        <Typography variant="body2" color="initial" sx={{ px: { lg: 5 }, py: 2 }}>
                            <LocationOnIcon color='primary' sx={{ mr: 2 }} />  Vijay nagar
                        </Typography>
                        <Typography variant="body2" color="initial" sx={{ px: { lg: 5 }, py: 2 }}>
                            <EmailIcon color='primary' sx={{ mr: 2 }} />  janak&co@gmail.com
                        </Typography>
                        <Typography variant="body2" color="initial" sx={{ px: { lg: 5 }, py: 2 }}>
                            <LocalPhoneIcon color='primary' sx={{ mr: 2 }} />   +91 7611188004
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={12} lg={6} sx={{ px: { lg: 5 }, mt: { xs: 4, sm: 3 } }}>
                        <form action="">
                            <Grid container spacing={0} sx={{ maxWidth: 450, }}>
                                <FormControl fullWidth>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', my: 1 }}>
                                        <FormLabel required sx={{ fontSize: { xs: 15, sm: 16, md: 17, lg: 18 }, fontWeight: 100, py: 0.5 }}>First Name</FormLabel>
                                        <TextField size='small' type='text' placeholder='Your name' name='first_name'></TextField>
                                    </Box>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', my: 1 }}>
                                        <FormLabel required sx={{ fontSize: { xs: 15, sm: 16, md: 17, lg: 18 }, fontWeight: 100, py: 0.5 }}>Email Address</FormLabel>
                                        <TextField size='small' type='email' placeholder='Your Email Address' name='email_id'></TextField>
                                    </Box>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', my: 1 }}>
                                        <FormLabel required sx={{ fontSize: { xs: 15, sm: 16, md: 17, lg: 18 }, fontWeight: 100, py: 0.5 }}>Phone Number</FormLabel>
                                        <TextField size='small' type='number' placeholder='Your Phone Number' name='phone_number'></TextField>
                                    </Box>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', my: 1 }}>
                                        <FormLabel required sx={{ fontSize: { xs: 15, sm: 16, md: 17, lg: 18 }, fontWeight: 100, py: 0.5 }}>Message</FormLabel>
                                        <TextField size='medium' type='text' placeholder='Enter your message...' name='message'></TextField>
                                    </Box>
                                    <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'start' } }}>
                                        <Button variant='contained' sx={{ fontSize: { xs: 18, md: 20, xl: 30 }, my: { xs: 2, lg: 3 }, padding: { xs: '5px 15px', md: '10px 50px', lg: '10px 50px' } }}>
                                            Submit
                                        </Button>

                                    </Box>
                                </FormControl>
                            </Grid>
                        </form>
                    </Grid>
                </Grid>
                {/* </Container> */}
            </Container>
        </div>
    )
}

export default ContactUsComponent
