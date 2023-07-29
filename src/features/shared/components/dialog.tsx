import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


const AppDialog = (props: any) => {

    const handleClose = () => {
        props.onClose()
    };

    return (
        <div>
            <Dialog
                open={props?.open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {props.selectedValue.title}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {props.selectedValue.content}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" color="error" onClick={handleClose}>Disagree</Button>
                    <Button variant="contained" color="success" onClick={handleClose} autoFocus>Agree</Button>
                </DialogActions>
            </Dialog>
        </div>

    )
};

export default AppDialog;