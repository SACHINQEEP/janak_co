import { Container, CssBaseline, Grid, Typography } from '@mui/material';
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
                <Grid container spacing={0} sx={{ backgroundColor: 'white', borderRadius: '25px' }}>
                    <Grid item xs={6} >
                        <Typography variant="h5" color="initial">
                            Let &apos;s have a conversation about your unique goals and challenges. We &apos;re all ears.
                        </Typography>
                        <Typography variant="h6" color="initial" sx={{ fontWeight: 300, fontSize: 15 }}>
                            At Janak & Co., we value open communication and are committed to providing exceptional customer service. Our friendly and knowledgeable team is ready to assist you and guide you towards achieving your digital marketing and business goals.
                        </Typography>

                        <Typography variant="body2" color="initial">
                            <LocationOnIcon />  Vijay nagar
                        </Typography>
                        <Typography variant="body2" color="initial">
                            <EmailIcon />  janak&co@gmail.com
                        </Typography>
                        <Typography variant="body2" color="initial">
                            <LocalPhoneIcon />   +91 7611188004
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>

                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default ContactUsComponent
