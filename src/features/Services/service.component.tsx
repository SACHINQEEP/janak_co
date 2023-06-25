import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Grid, CardContent } from '@mui/material';


import Typography from '@mui/material/Typography';
import ServiceContent from './content';
import AppCard from '../shared/components/Card';
import { Link } from 'react-router-dom';


export const ServicePageComponent = () => {
    return (
        <Grid component='section' container mt={10} sx={{}}>
            <Grid item xs={12} sm={6} md={6} lg={4} xl={3}>
                <CardContent>
                    <Typography variant="body2" color="#f5821f" sx={{ fontSize: { xs: 28, sm: 20, md: 30, lg: 40 }, fontWeight: 'bold' }}>
                        Our comprehensive services
                    </Typography>
                    <Link to={'/services'} style={{ fontWeight: 'bold', fontSize: '16px' }}>Learn More<ArrowRightAltIcon /></Link>
                </CardContent>
            </Grid>
            {ServiceContent.map((list, i) => (
                <AppCard title={list.title} content={list.content} src={list.src} cardAlt={list.cardAlt} key={i + 1} />
            ))}
        </Grid >
    )
}

const ServiceComponent = () => {
    return (
        <>
        </>
    )
}

export default ServiceComponent