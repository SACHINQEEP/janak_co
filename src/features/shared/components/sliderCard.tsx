import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import Link from '@mui/material/Link';

import blogOne from '../../../assets/blog-02.jpg'

const AppSliderCard = () => {
    return (
        <>
            <Card sx={{ maxWidth: '450px', boxShadow: 'none', border: 'none', margin: '0 2rem' }}>
                <CardMedia
                    component='img'
                    alt="blog01"
                    height='190'
                    image={blogOne} sx={{ borderRadius: '25px', boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.3)' }} />
                <CardContent>
                    <Typography variant="h5" color="initial" sx={{ fontSize: { xs: 25 }, fontWeight: 'bold' }}>
                        What I Love about it: The Blonde Abroad
                    </Typography>
                    <Typography variant="body1" color="#746a6a" sx={{ fontSize: { xs: 18 }, fontWeight: '200', opacity: '0.8', my: 2 }}>
                        Welcome to janak & co.. Where dreams soor and brands conquer. We are a premier digital marketing agency committed to empowering businesses/brnads to reach new heights of success in the everevolving online landscape.
                    </Typography>
                    <Link href='#' sx={{ fontWeight: 'bold', fontSize: '16px' }}>Learn More<ArrowRightAltIcon /></Link>
                </CardContent>
            </Card>
        </>
    )
}

export default AppSliderCard;