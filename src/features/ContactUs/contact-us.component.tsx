import { Button, Container, CssBaseline, FormControl, Grid, Box, TextField, Typography } from '@mui/material';
import { AboutUsPageComponent } from '../AboutUs/aboutUs.component';
import contactImage from '../../assets/Contact.svg'
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { useEffect, useState } from 'react';
import { Formik, Field, Form } from "formik";
import * as yup from 'yup';

import emailjs from '@emailjs/browser';
import AppCustomizedSnackbars from '../shared/components/snackebar';







const ContactUsComponent = () => {

    const [formValue, setFormValue] = useState({
        first_name: '',
        email_id: '',
        phone_number: '',
        message: ''
    });
    const [isSubmit, setIsSubmit] = useState(false);


    const formSchema = yup.object().shape({
        first_name: yup.string().required(),
        email_id: yup.string().email().required(),
        phone_number: yup.string().max(10).min(10),
        message: yup.string()
    })

    const handleFormSubmit = async (newValue: any) => {
        try {
            await formSchema.validate(newValue);
            setFormValue(newValue);
            setIsSubmit(true);
        } catch (error) {
            // console.log(error);
            // Handle form validation errors
        }
    };


    useEffect(() => {
        if (isSubmit) {
            const sendEmail = async () => {
                const templateParams = {
                    name: formValue.first_name,
                    email_id: formValue.email_id,
                    mobile_number: formValue.phone_number,
                    message: formValue.message,
                    to_name: 'Janak and Co.'
                };

                try {
                    const response = await emailjs.send('service_2n1kcm8', 'template_eagz89g', templateParams, 'taMrSW3z0l9T29ScY');

                    if (response.status === 200) {
                        // eslint-disable-next-line no-console
                        console.log('SUCCESS!', response.status, response.text);
                    }

                } catch (err) {
                    // eslint-disable-next-line no-console
                    console.log('FAILED...', err);
                }
            };

            sendEmail();
            setTimeout(() => {
                setIsSubmit(false); // Reset isSubmit to false after submission
            }, 10000)
        }
    }, [isSubmit, formValue]);





    const contentDetail = `We would love to hear from you! Whether you have a question, need more information about our services, or want to discuss a potential collaboration, our team is here to help.\n\nWe understand that every question, idea, or opportunity matters, which is why we encourage you to take the first step. Feel free to reach out to us using the contact information provided below or fill out the convenient form. We promise to respond to your inquiry promptly.`;


    return (
        <Box sx={{ margin: '0 0 6rem 0', padding: { md: '0 2rem' } }}>
            <Container maxWidth="xl">
                <CssBaseline />
                <Box position='relative' sx={{ height: { md: '190dvh' } }}>
                    <AboutUsPageComponent contentName='Get in Touch with Janak & Co.' order={true} image={contactImage} contentDetail={contentDetail} isButtonVisible={false} />
                    <Grid container spacing={0} sx={{ position: { md: 'absolute' }, top: '32%', backgroundColor: 'white', borderRadius: '25px', my: { xs: 10 }, py: { xs: 1, md: 1.5, lg: 3 }, px: { xs: 2, lg: 2 }, }}>
                        <Grid item xs={12} md={12} lg={6} sx={{ px: { lg: 3 } }}>
                            <Typography variant="h5" color="initial" sx={{ fontSize: { xs: 20, md: 22, lg: 28 }, mt: 5, py: 1, px: { lg: 5 } }}>
                                Let &apos;s have a conversation about your unique goals and challenges. We &apos;re all ears.
                            </Typography>
                            <Typography variant="h6" color="initial" sx={{ color: 'grey', fontWeight: 300, fontSize: { xs: 16, md: 18, ld: 20 }, mb: 2, px: { lg: 5 } }}>
                                At Janak & Co., we value open communication and are committed to providing exceptional customer service. Our friendly and knowledgeable team is ready to assist you and guide you towards achieving your digital marketing and business goals.
                            </Typography>
                            <Typography variant="body2" color="gray" sx={{ px: { lg: 5 }, py: 2 }}>
                                <EmailIcon color='primary' sx={{ mr: 2 }} />  connect@janakandco.com
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
                                        <Grid container spacing={2} sx={{ maxWidth: 450, marginTop: { md: '4rem' }, marginLeft: { md: '3rem' } }}>
                                            <FormControl fullWidth>
                                                <Box sx={{ display: 'flex', flexDirection: 'column', my: 1 }}>
                                                    {/* <FormLabel required sx={{ fontSize: { xs: 15, sm: 16, md: 17, lg: 18 }, fontWeight: 100, py: 0.5 }}>First Name</FormLabel> */}
                                                    <Field name='first_name' type='text'>
                                                        {({ field }: any) => (
                                                            <TextField id="outlined-basic" label="First Name" variant="outlined" size='small' {...field} type='text' placeholder='Your name' name='first_name'></TextField>
                                                        )}
                                                    </Field>
                                                </Box>
                                                <Box sx={{ display: 'flex', flexDirection: 'column', my: 1 }}>
                                                    {/* <FormLabel required sx={{ fontSize: { xs: 15, sm: 16, md: 17, lg: 18 }, fontWeight: 100, py: 0.5 }}>Email Address</FormLabel> */}
                                                    <Field name='email_id' type='email'>
                                                        {({ field }: any) => (
                                                            <TextField id="outlined-basic" label="Email Address" variant="outlined" size='small' {...field} type='email' placeholder='Your Email Address' name='email_id'></TextField>
                                                        )}
                                                    </Field>
                                                </Box>
                                                <Box sx={{ display: 'flex', flexDirection: 'column', my: 1 }}>
                                                    {/* <FormLabel required sx={{ fontSize: { xs: 15, sm: 16, md: 17, lg: 18 }, fontWeight: 100, py: 0.5 }}>Phone Number</FormLabel> */}
                                                    <Field name='phone_number' type='number'>
                                                        {({ field }: any) => (
                                                            <TextField id="outlined-basic" label="Phone Number" variant="outlined" size='small' {...field} type='text' placeholder='Your Phone Number' name='phone_number'></TextField>
                                                        )}
                                                    </Field>
                                                </Box>
                                                <Box sx={{ display: 'flex', flexDirection: 'column', my: 1 }}>
                                                    {/* <FormLabel required sx={{ fontSize: { xs: 15, sm: 16, md: 17, lg: 18 }, fontWeight: 100, py: 0.5 }}>Message</FormLabel> */}
                                                    <Field name='message' type='text'>
                                                        {({ field }: any) => (
                                                            <TextField id="outlined-basic" label="Message" variant="outlined" size='medium' {...field} type='text' placeholder='Enter your message...' name='message'></TextField>
                                                        )}
                                                    </Field>
                                                </Box>
                                                <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'start' } }}>
                                                    <Button type='submit' variant='contained' sx={{ fontSize: { xs: 18, md: 20, xl: 30 }, my: { xs: 2, lg: 3 }, padding: { xs: '5px 15px', md: '10px 50px', lg: '10px 50px' } }}>
                                                        Submit
                                                    </Button>
                                                </Box>
                                                <AppCustomizedSnackbars open={isSubmit} />
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
