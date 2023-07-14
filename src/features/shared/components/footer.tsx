import { CssBaseline, Grid, Button, Box, Chip, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import Typography from '@mui/material/Typography';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';
// import EmailIcon from '@mui/icons-material/Email';
// import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';



import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";

import logo from '../../../assets/logo-white.png'
import { useNavigate } from 'react-router';


const navItems = [
    {
        name: 'Home',
        router: '/'
    },
    {
        name: 'Services',
        router: '/services'
    },
    {
        name: 'About',
        router: '/about-us'
    },
    {
        name: 'Blog',
        router: '/blogs'
    },
    {
        name: 'Contact',
        router: '/contact-us'
    }
]

const AppFooter = () => {

    const nevigate = useNavigate()

    const handleOnClick = () => {
        nevigate('/contact-us')
    }

    const handleFaq = () => {
        nevigate('/user-faqs')
    }

    return (
        <Box>
            <CssBaseline />
            <Box sx={{ pt: 10, mt: { xl: 8 }, display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', }}>
                <Box sx={{ position: 'absolute', left: { xs: '8%', md: '10%' }, top: '-10%', width: { xs: '85%', md: '80%' }, p: 5, borderRadius: 8, backgroundColor: '#f58634', display: 'flex', flexDirection: 'column', textAlign: 'center', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography variant="h3" color="white" sx={{ fontSize: { xs: 30, md: 20, lg: 50, xl: 60 } }}>
                        <Chip label='Start' size='medium' variant="outlined" sx={{ padding: { xs: '0 0' }, fontSize: { xs: 10 } }} />  Growing
                    </Typography>
                    <Typography variant="h5" color="white" sx={{ my: 3, maxWidth: 400, fontSize: { xs: 16, md: 20 }, fontWeight: 300 }}>
                        Level Up Your Marketing Without Increasing  Your Headcount
                    </Typography>
                    <Button onClick={handleOnClick} variant='contained' sx={{ backgroundColor: '#f6f5ee', color: 'grey', fontWeight: '200', fontSize: { xs: 15 }, my: { xs: 1, md: 2 }, padding: { xs: '10px 30px', md: '10px 50px' } }}>
                        Work With Us
                    </Button>
                </Box>
                <Box sx={{ minHeight: { xs: '55dvh', md: '60dvh', lg: '70dvh', xl: '70dvh' }, backgroundColor: '#1b1b1b', display: 'flex', alignItems: 'end' }}>
                    <Grid container sx={{ alignItems: 'end' }}>
                        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Box >
                                <img src={logo} alt="janak&Co" style={{ width: '140px' }} />
                            </Box>
                        </Grid>
                        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Typography variant="body2" color="white">
                                Powered by Janak & Co.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sx={{ m: 3 }}>
                            <Box sx={{ textAlign: 'center', cursor: 'pointer', mr: 2 }}>
                                <Typography onClick={handleFaq} variant="h5" color="white" sx={{ fontSize: 15, fontWeight: 100 }}>
                                    FAQs
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'start' }}>
                            <List sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', maxWidth: 350, }}>
                                {navItems.map((item, i) => (
                                    <ListItem key={i + 1} disablePadding >
                                        <ListItemButton sx={{ textAlign: 'center' }}>
                                            <ListItemText primary={<Typography variant="body1" color="initial" sx={{ color: 'white', fontSize: { xs: 11, md: 18 } }}>{item.name}</Typography>} />
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                            </List>
                        </Grid>
                        <Grid item xs={12} sx={{ fontSize: '30px', color: 'white', mb: 2, display: 'flex', justifyContent: 'center' }}>
                            <BsFacebook style={{ padding: '5px' }} />
                            <AiFillTwitterCircle style={{ padding: '5px' }} />
                            <BsLinkedin style={{ padding: '5px' }} />
                            <AiFillInstagram style={{ padding: '5px' }} />
                        </Grid>
                    </Grid>
                </Box>

            </Box >
        </Box>
    )
}

export default AppFooter;