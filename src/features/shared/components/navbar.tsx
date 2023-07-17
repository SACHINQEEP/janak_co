import { ThemeProvider, createTheme, Container } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useLocation, useNavigate } from 'react-router';

import { MdOutlineSegment } from 'react-icons/md'
import Logo from '../../../assets/logo.png'



interface Props {
    window?: () => Window;
}

const defaultTheme = createTheme({
    typography: {
        fontFamily: [
            'satoshi-regular',
            'sans-serif',
        ].join(','),
    },
});

const drawerWidth = 240;


const navItems = [
    {
        name: 'Home',
        router: '/'
    },
    {
        name: 'Services',
        router: 'services'
    },
    {
        name: 'About',
        router: 'aboutus'
    },
    {
        name: 'Blog',
        router: 'blogs'
    },
    {
        name: 'Contact',
        router: 'contact-us'
    },
    {
        name: <MdOutlineSegment style={{ fontSize: '23px' }} />,
        router: '/'
    }
]

const NavBar = (props: Props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const nevigate = useNavigate();
    const location = useLocation()
    const currentLocation = location.pathname
    const segments = currentLocation.split('/')
    const firstSegment = segments.length > 1 ? `/${segments[1]}` : ''

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const handlesubmit = (router: string) => {
        nevigate(router)
    }

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <img src={Logo} alt='LOGO' style={{ width: '80px', height: 80 }} />
            <Divider />
            <List>
                {navItems.slice(0, -1).map((item, i) => (
                    <ListItem key={i + 1} disablePadding>
                        <ListItemButton selected={firstSegment === item.router} onClick={() => handlesubmit(item.router)} sx={{
                            textAlign: 'center',
                            '&.Mui-selected': {
                                backgroundColor: '#f58634', // Set the background color for the selected item
                                color: '#fff', // Set the text color for the selected item
                            },
                            fontWeight: 600
                        }}>
                            <ListItemText primary={item.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container maxWidth="lg">
                <Box sx={{ display: 'flex' }}>
                    <CssBaseline />
                    <AppBar position="fixed" component="nav" sx={{ backgroundColor: '#f58634' }}>
                        <Toolbar>
                            <Typography
                                variant="h6"
                                component="div"
                                sx={{ flexGrow: 1, fontSize: { xl: 40 }, fontWeight: 'bold' }}
                            >
                                Janak & Co.
                            </Typography>
                            <Box sx={{ display: { xs: 'none', sm: 'block' }, }}>
                                {navItems.map((item, i) => (
                                    <Button onClick={() => handlesubmit(item.router)} key={i + 1} sx={{ color: '#fff', padding: '0 1.5rem' }} style={{ fontWeight: 'bold' }}>
                                        {item.name}
                                    </Button>
                                ))}
                            </Box>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerToggle}
                                sx={{ display: { sm: 'none' } }}
                            >
                                <MdOutlineSegment style={{ fontSize: '23px' }} />
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                    <Box component="nav">
                        <Drawer
                            container={container}
                            variant="temporary"
                            open={mobileOpen}
                            onClose={handleDrawerToggle}
                            ModalProps={{
                                keepMounted: true, // Better open performance on mobile.
                            }}
                            sx={{
                                display: { xs: 'block', sm: 'none' },
                                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                            }}
                        >
                            {drawer}
                        </Drawer>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default NavBar