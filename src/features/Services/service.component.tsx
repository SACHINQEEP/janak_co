import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Grid, CardContent, Container, Box } from '@mui/material';


import Typography from '@mui/material/Typography';
import ServiceContent, { Content } from './content';
import AppCard from '../shared/components/Card';
import { Link } from 'react-router-dom';
import { AboutUsPageComponent } from '../AboutUs/aboutUs.component';
import serviceImage from '../../assets/Services.svg'

interface ServiceProps {
    isRequired: boolean
}

export const ServicePageComponent = ({ isRequired }: ServiceProps) => {
    return (
        <Grid component='section' container mt={10} sx={{}}>
            {isRequired && <Grid item xs={12} sm={6} md={6} lg={4} xl={3}>
                <CardContent>
                    <Typography variant="body2" color='#f58634' sx={{ fontSize: { xs: 28, sm: 20, md: 30, lg: 40 }, textAlign: { xs: 'center', md: 'start' }, fontWeight: 'bold' }}>
                        Our comprehensive services
                    </Typography>
                    <Link to={'/services'} style={{ fontWeight: 'bold', fontSize: '16px' }}>Learn More<ArrowRightAltIcon /></Link>
                </CardContent>
            </Grid>}
            {isRequired === true ?
                ServiceContent.map((list, i) => (
                    <AppCard title={list.title} content={list.content} src={list.src} cardAlt={list.cardAlt} key={i + 1} />
                ))
                : Content.map((list, i) => (
                    <AppCard title={list.title} content={list.content} src={list.src} cardAlt={list.cardAlt} key={i + 1} />
                ))
            }
        </Grid >
    )
}

const ServiceComponent = () => {
    return (
        <Box sx={{ margin: '0 0 6rem 0', padding: { md: '0 2rem' } }}>
            <Container maxWidth="xl">
                <AboutUsPageComponent contentName='Welcome to Janak & Co.' order={true} image={serviceImage} contentDetail='Welcome to Janak & Co., where dreams soar and brands conquer. We are a premier digital marketing agency committed to empowering businesses/brand to reach new heights of success in the ever-evolving online landscape. With a team of passionate experts driven by innovation, trust, bold strategies and confidence, we are committed to delivering outstanding results and empowering our clients to surpass their goals.' isButtonVisible={false} />
                <ServicePageComponent isRequired={false} />
            </Container>
        </Box>
    )
}

export default ServiceComponent