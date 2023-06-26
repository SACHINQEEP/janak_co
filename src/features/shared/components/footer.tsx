import { CssBaseline, Grid, Button, Box, Chip } from '@mui/material';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';


import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';


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
    return (
        <>
            <CssBaseline />
            <Box sx={{ pt: 10, display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative' }}>
                <Box sx={{ position: 'absolute', left: { xs: '8%', md: '10%' }, top: '-10%', width: { xs: '85%', md: '80%' }, p: 5, borderRadius: 8, backgroundColor: '#f5821f', display: 'flex', flexDirection: 'column', textAlign: 'center', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography variant="h3" color="white" sx={{ fontSize: { xs: 30, md: 20, lg: 50, xl: 60 } }}>
                        <Chip label='Start' size='medium' variant="outlined" sx={{ padding: { xs: '0 0' }, fontSize: { xs: 10 } }} />  Growing
                    </Typography>
                    <Typography variant="h5" color="white" sx={{ my: 3, maxWidth: 400, fontSize: { xs: 16, md: 20 }, fontWeight: 300 }}>
                        Level Up Your Marketing Without Increasing  Your Headcount
                    </Typography>
                    <Button variant='contained' sx={{ backgroundColor: '#f6f5ee', color: 'grey', fontWeight: '200', fontSize: { xs: 15 }, my: { xs: 1, md: 2 } }}>
                        Work With Us
                    </Button>
                </Box>
                <Box sx={{ height: { xs: '55dvh', md: '60dvh', lg: '65dvh' }, backgroundColor: '#1b1b1b', display: 'flex', alignItems: 'end' }}>
                    <Grid container sx={{ alignItems: 'end' }}>
                        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Box maxWidth={150} sx={{}}>
                                <Typography variant="h5" color="white" sx={{ backgroundColor: '#f5821f', padding: '0 8px', borderRadius: '5px' }}>
                                    Janak & Co.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'start' }}>
                            <List sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', maxWidth: 350, }}>
                                {navItems.map((item, i) => (
                                    <ListItem key={i + 1} disablePadding >
                                        <ListItemButton sx={{ textAlign: 'center' }}>
                                            <ListItemText primary={<Typography variant="body1" color="initial" sx={{ color: 'white', fontSize: { xs: 11, md: 18, lg: 25 } }}>{item.name}</Typography>} />
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                            </List>
                        </Grid>
                        <Grid item xs={12} sx={{ color: 'white', mb: 2, display: 'flex', justifyContent: 'center' }}>
                            <FacebookOutlinedIcon sx={{ mr: 2 }} />
                            <TwitterIcon sx={{ mr: 2 }} />
                            <TwitterIcon sx={{ mr: 2 }} />
                            <TwitterIcon sx={{ mr: 2 }} />
                        </Grid>
                    </Grid>
                </Box>

            </Box >
        </>
    )
}

export default AppFooter;