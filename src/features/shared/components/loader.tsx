
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import webLogo from '../../../assets/logo.png'

const AppLoader = () => {
    return (
        <Box sx={{ height: '100dvh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
            <img src={webLogo} alt='logo' style={{ width: '110px' }} />
            <CircularProgress />
        </Box>
    );
}

export default AppLoader;