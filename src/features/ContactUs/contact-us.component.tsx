import { Button, Container, CssBaseline, FormControl, FormLabel, Grid, Box, TextField, Typography } from '@mui/material';
import { AboutUsPageComponent } from '../AboutUs/aboutUs.component';
import contactImage from '../../assets/Contact.svg'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { useState } from 'react';
import { Formik, Field, Form } from "formik";
import * as yup from 'yup';


const ContactUsComponent = () => {

    const [formValue, setFormValue] = useState({
        first_name: '',
        email_id: '',
        mobile_number: '',
        message: ''
    });


    const formSchema = yup.object().shape({
        first_name: yup.string().required(),
        email_id: yup.string().email().required(),
        phone_number: yup.number().max(10).min(10),
        message: yup.string()
    })

    const handleFormSubmit = (newValue: any) => {
        setFormValue(newValue);
    }

    return (
        <Box sx={{ margin: '0 0 6rem 0', padding: { md: '0 2rem' } }}>
            <Container maxWidth="xl">
                <CssBaseline />
                <Box position='relative' sx={{ height: { md: '190dvh' } }}>
                    <AboutUsPageComponent contentName='Get in Touch with Janak & Co.' order={true} image={contactImage} />
                    <Grid container spacing={0} sx={{ position: { md: 'absolute' }, top: '32%', backgroundColor: 'white', borderRadius: '25px', my: { xs: 10 }, py: { xs: 1, md: 1.5, lg: 3 }, px: { xs: 2, lg: 2 }, }}>
                        <Grid item xs={12} md={12} lg={6} sx={{ px: { lg: 3 } }}>
                            <Typography variant="h5" color="initial" sx={{ fontSize: { xs: 20, md: 22, lg: 28 }, mt: 5, py: 1, px: { lg: 5 } }}>
                                Let &apos;s have a conversation about your unique goals and challenges. We &apos;re all ears.
                            </Typography>
                            <Typography variant="h6" color="initial" sx={{ color: 'grey', fontWeight: 300, fontSize: { xs: 16, md: 18, ld: 20 }, mb: 2, px: { lg: 5 } }}>
                                At Janak & Co., we value open communication and are committed to providing exceptional customer service.
                            </Typography>

                            <Typography variant="body2" color="gray" sx={{ px: { lg: 5 }, py: 2 }}>
                                <LocationOnIcon color='primary' sx={{ mr: 2 }} />  Vijay nagar
                            </Typography>
                            <Typography variant="body2" color="gray" sx={{ px: { lg: 5 }, py: 2 }}>
                                <EmailIcon color='primary' sx={{ mr: 2 }} />  janak&co@gmail.com
                            </Typography>
                            <Typography variant="body2" color="gray" sx={{ px: { lg: 5 }, py: 2 }}>
                                <LocalPhoneIcon color='primary' sx={{ mr: 2 }} />   +91 7611188004
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={12} lg={6} sx={{ px: { lg: 5 }, mt: { xs: 4, sm: 3 } }}>
                            <Formik
                                initialValues={formValue}
                                validationSchema={formSchema}
                                onSubmit={handleFormSubmit}
                            >
                                {() => (
                                    <Form>
                                        <Grid container spacing={0} sx={{ maxWidth: 450, }}>
                                            <FormControl fullWidth>
                                                <Box sx={{ display: 'flex', flexDirection: 'column', my: 1 }}>
                                                    <FormLabel required sx={{ fontSize: { xs: 15, sm: 16, md: 17, lg: 18 }, fontWeight: 100, py: 0.5 }}>First Name</FormLabel>
                                                    <Field name='first_name' type='text'>
                                                        {({ field }: any) => (
                                                            <TextField size='small' {...field} type='text' placeholder='Your name' name='first_name'></TextField>
                                                        )}
                                                    </Field>
                                                </Box>
                                                <Box sx={{ display: 'flex', flexDirection: 'column', my: 1 }}>
                                                    <FormLabel required sx={{ fontSize: { xs: 15, sm: 16, md: 17, lg: 18 }, fontWeight: 100, py: 0.5 }}>Email Address</FormLabel>
                                                    <Field name='email_id' type='email'>
                                                        {({ field }: any) => (
                                                            <TextField size='small' {...field} type='email' placeholder='Your Email Address' name='email_id'></TextField>
                                                        )}
                                                    </Field>
                                                </Box>
                                                <Box sx={{ display: 'flex', flexDirection: 'column', my: 1 }}>
                                                    <FormLabel required sx={{ fontSize: { xs: 15, sm: 16, md: 17, lg: 18 }, fontWeight: 100, py: 0.5 }}>Phone Number</FormLabel>
                                                    <Field name='phone_number' type='number'>
                                                        {({ field }: any) => (
                                                            <TextField size='small' {...field} type='number' placeholder='Your Phone Number' name='phone_number'></TextField>
                                                        )}
                                                    </Field>
                                                </Box>
                                                <Box sx={{ display: 'flex', flexDirection: 'column', my: 1 }}>
                                                    <FormLabel required sx={{ fontSize: { xs: 15, sm: 16, md: 17, lg: 18 }, fontWeight: 100, py: 0.5 }}>Message</FormLabel>
                                                    <Field name='message' type='text'>
                                                        {({ field }: any) => (
                                                            <TextField size='medium' {...field} type='text' placeholder='Enter your message...' name='message'></TextField>
                                                        )}
                                                    </Field>
                                                </Box>
                                                <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'start' } }}>
                                                    <Button type='submit' variant='contained' sx={{ fontSize: { xs: 18, md: 20, xl: 30 }, my: { xs: 2, lg: 3 }, padding: { xs: '5px 15px', md: '10px 50px', lg: '10px 50px' } }}>
                                                        Submit
                                                    </Button>
                                                </Box>
                                            </FormControl>
                                        </Grid>
                                    </Form>
                                )}
                            </Formik>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    )
}

export default ContactUsComponent
