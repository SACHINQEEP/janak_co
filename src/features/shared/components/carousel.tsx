import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { useRef } from 'react';

import leftArrow from '../../../assets/arrow_left.svg'
import rightArrow from '../../../assets/arrow_right.svg'

import AppSliderCard from './sliderCard';

// eslint-disable-next-line import/order
import { Box, Grid, Typography } from '@mui/material';



const CustomArrowButton = ({ type, splideRef }: any) => {
    const handleButtonClick = () => {
        if (type === 'prev') {
            splideRef.current.go('-1');
        } else if (type === 'next') {
            splideRef.current.go('+1');
        }
    };

    return (
        <Box
            sx={{
                width: { xs: '20px', sm: '40px', md: '60px' },
                cursor: 'pointer',
                ml: 2, mr: 2
            }}
            onClick={handleButtonClick}
        >
            <img
                style={{ width: '100%', height: 'auto' }}
                src={type === 'prev' ? leftArrow : rightArrow}
                alt={type === 'prev' ? 'left arrow' : 'right arrow'}
            />
        </Box>
    );
};



const AppCustomCarousel = ({ data }: any) => {

    const splideRef = useRef(null);

    const splideOptions = {
        type: 'loop',
        perPage: 3,
        rewind: true,
        arrows: false,
        breakpoints: {
            600: {
                perPage: 1, // Show 1 slide in the mobile view
                autoplay: true, // Enable auto slide in the mobile view
                interval: 3000, // Set the interval for auto slide (e.g., 3 seconds)
            },
            1280: {
                perPage: 3, // Show 3 slides in the desktop view
                autoplay: false, // Disable auto slide in the desktop view
            },
        },
    };

    return (
        <>
            <Grid container sx={{ mb: 2, mt: { xs: 5 } }}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h3" color='#f58634' sx={{ fontSize: { xs: 28, md: 36, lg: 40 } }}>
                        Read Our Updated Blog Posts
                    </Typography>
                </Grid>
                <Grid item xs={6} sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'end' }}>
                    <CustomArrowButton type="prev" splideRef={splideRef} />
                    <CustomArrowButton type="next" splideRef={splideRef} />
                </Grid>
            </Grid>
            <Splide aria-label="My Favorite Images" ref={splideRef} options={splideOptions}>
                {data.map((list: any, i: any) => (
                    <SplideSlide key={i}>
                        <AppSliderCard key={i} title={list.title} description={list.description} imageLink={list.imageLink} />
                    </SplideSlide>
                ))}

            </Splide >
        </>
    )
}

export default AppCustomCarousel

