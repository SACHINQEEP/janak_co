import { Box, CssBaseline, Container } from '@mui/material';
import blogTwo from '../../assets/blog-02.jpg'
import blogThree from '../../assets/blog-03.jpg'
import blogOne from '../../assets/blog.jpg'
import blogForth from '../../assets/meeting.jpg'
import AppCustomCarousel from '../shared/components/carousel';

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
        <div style={{ margin: '6rem 0 6rem 0', border: '1px solid red' }}>
            <Container maxWidth="xl">
                <CssBaseline />
                <BlogsPageComponent />
            </Container>
        </div>
    )
}

export default BlogsComponent