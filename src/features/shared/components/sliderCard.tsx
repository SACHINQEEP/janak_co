import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import Link from '@mui/material/Link';




interface SliderCardData {
    title: string,
    description: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    imageLink: any
}



const AppSliderCard = ({ title, description, imageLink }: SliderCardData) => {
    return (
        <>
            <Card sx={{ boxShadow: 'none', border: 'none', margin: '0 2rem' }}>
                <CardMedia
                    component='img'
                    alt="blog01"
                    height='190'
                    image={imageLink} sx={{ borderRadius: '25px', boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.3)' }} />
                <CardContent>
                    <Typography variant="h5" color="initial" sx={{ fontSize: { xs: 25 }, fontWeight: 'bold' }}>
                        {title}
                    </Typography>
                    <Typography variant="body1" color="#746a6a" sx={{ fontSize: { xs: 16 }, fontWeight: '200', opacity: '0.8', my: 2 }}>
                        {description}
                    </Typography>
                    <Link href='#' sx={{ fontWeight: 'bold', fontSize: '16px' }}>Learn More<ArrowRightAltIcon /></Link>
                </CardContent>
            </Card>
        </>
    )
}

export default AppSliderCard;