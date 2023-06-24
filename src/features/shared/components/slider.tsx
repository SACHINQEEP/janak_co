import { Box, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import React from 'react';

import leftArrow from '../../../assets/arrow_left.svg'
import rightArrow from '../../../assets/arrow_right.svg'

import AppSliderCard from './sliderCard';

interface Carousel {
    images: any[]
    visibleItems: number
}

const AppCarousel = ({ images, visibleItems }: Carousel) => {
    const [currentIndex, setCurrentIndex] = React.useState(visibleItems > 0 ? visibleItems - 1 : 0);

    console.log("currentIndex", currentIndex, visibleItems)

    const goToPreviousSlide = () => {
        setCurrentIndex((prevIndex) => {

            console.log("prevIndex", prevIndex)

            const newIndex = prevIndex - 1;
            return newIndex < 0 ? images.length - visibleItems : newIndex;
        });
    };

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => {

            console.log("prevIndex", prevIndex)
            const newIndex = prevIndex + 1;
            return newIndex >= images.length - visibleItems + 1 ? 0 : newIndex;
        });
    };

    return (
        <>
            <Grid container >
                <Grid item xs={12} md={6}>
                    <Typography variant="h3" color="#f5821f" sx={{ fontSize: { xs: 25, md: 36, lg: 40 } }}>
                        Read Our Updated Blog Posts
                    </Typography>
                </Grid>
                <Grid item xs={6} sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'end' }}>
                    <Box sx={{ width: { xs: '20px', sm: '40px', md: '60px' }, mr: 2 }}>
                        <img style={{ cursor: 'pointer' }} onClick={goToPreviousSlide} src={leftArrow} alt="left arrow" />
                    </Box>
                    <Box sx={{ width: { xs: '20px', sm: '40px', md: '60px' } }}>
                        <img style={{ cursor: 'pointer' }} onClick={goToNextSlide} src={rightArrow} alt="right arrow" />
                    </Box>
                </Grid>
            </Grid>
            <Box sx={{ position: 'relative', display: 'flex' }}>
                {images.slice(currentIndex, currentIndex + visibleItems).map((image, index) => (
                    <AppSliderCard key={index} title={image.title} description={image.description} imageLink={image.imageLink} />
                ))}

            </Box>
        </>

    );
};

export default AppCarousel;

