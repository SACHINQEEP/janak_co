
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const AppLoader = () => {
    return (
        <Box sx={{ height: '100dvh', display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
            <CircularProgress />
        </Box>
    );
}

export default AppLoader;