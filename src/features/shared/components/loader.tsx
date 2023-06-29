
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const AppLoader = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
            <CircularProgress />
        </Box>
    );
}

export default AppLoader;