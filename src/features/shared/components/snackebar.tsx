import * as React from 'react';
import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

// eslint-disable-next-line react/display-name
const Alert = React.forwardRef<HTMLDivElement, AlertProps>((props, ref) => {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const AppCustomizedSnackbars = ({ open }: any) => {



    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        open = false
    };

    // Assuming this state variable is updated when the email is successfully sent
    // const emailSentSuccessfully = true;

    // React.useEffect(() => {
    //     if (emailSentSuccessfully) {

    //         // Close the snackbar after 6 seconds (autoHideDuration is in milliseconds)
    //         const timer = setTimeout(() => {
    //             open = false
    //         }, 6000);

    //         // Clean up the timer if the component unmounts before the timer is complete
    //         return () => {
    //             clearTimeout(timer);
    //         };
    //     }

    //     // Add a return statement here with an empty function as a cleanup function
    //     return () => { };
    // }, [emailSentSuccessfully]);

    return (
        <Stack spacing={2} sx={{ width: '100%' }}>
            <Snackbar open={open} autoHideDuration={30000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Your success is our priority. Lets collaborate and embark on a digital marketing journey that will elevate your brand to new heights.
                </Alert>
            </Snackbar>
        </Stack>
    );
};

export default AppCustomizedSnackbars;
