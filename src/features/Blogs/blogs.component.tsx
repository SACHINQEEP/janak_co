import { Box, CssBaseline, Container, Grid } from '@mui/material';
import blogTwo from '../../assets/blog-02.jpg'
import blogThree from '../../assets/blog-03.jpg'
import blogOne from '../../assets/blog.jpg'
import blogForth from '../../assets/meeting.jpg'
import AppCustomCarousel from '../shared/components/carousel';
import AppSliderCard from '../shared/components/sliderCard';

export const BlogsPostList = [
    {
        title: 'What I Love about it',
        description: 'Welcome to janak & co.. Where dreams soor and brands conquer. We are a premier digital marketing agency committed to empowering businesses/brnads to reach new heights of success in the everevolving online landscape.',
        imageLink: blogOne
    },
    {
        title: 'Best UX Design Blogs',
        description: 'Welcome to janak & co.. Where dreams soor and brands conquer. We are a premier digital marketing agency committed to empowering businesses/brnads to reach new heights of success in the everevolving online landscape.',
        imageLink: blogTwo
    },
    {
        title: 'The Ultimate Guide to Advertising',
        description: 'Welcome to janak & co.. Where dreams soor and brands conquer. We are a premier digital marketing agency committed to empowering businesses/brnads to reach new heights of success in the everevolving online landscape.',
        imageLink: blogThree
    },
    {
        title: 'The Ultimate Meeting',
        description: 'Welcome to janak & co.. Where dreams soor and brands conquer. We are a premier digital marketing agency committed to empowering businesses/brnads to reach new heights of success in the everevolving online landscape.',
        imageLink: blogForth
    },
]


export const BlogsPageComponent = () => {
    return (
        <Box >
            <AppCustomCarousel data={BlogsPostList} />
        </Box>
    )
}

const BlogsComponent = () => {
    return (
        <Box sx={{ margin: '6rem 0 6rem 0', padding: { md: '0 2rem' } }}>
            <Container maxWidth="xl">
                <CssBaseline />
                {/* <BlogsPageComponent /> */}
                <Grid container spacing={0}>
                    {BlogsPostList.map((list, i) => (
                        <Grid item xs={12} md={6} lg={4} key={i + 1}>
                            <AppSliderCard key={i} title={list.title} description={list.description} imageLink={list.imageLink} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    )
}

export default BlogsComponent