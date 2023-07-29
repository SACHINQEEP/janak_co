import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Grid, Container, CssBaseline } from '@mui/material';
import faq from './faq.content.json'


const UserFaqs = () => {
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };

    return (
        <Box sx={{ margin: '6rem 0 6rem 0', padding: { md: '0 2rem' } }}>
            <Container maxWidth="xl">
                <CssBaseline />
                <Typography variant="h3" color="#f58634" sx={{ p: 1, fontSize: { xs: "30px", sm: '22px', md: '30px', lg: '43px' }, fontWeight: 'bold', borderBottom: '2px solid #f58634', textAlign: 'center', my: 3 }}>
                    Frequently Asked Questions (FAQs)
                </Typography>

                <Grid container spacing={2}>
                    <Box width={'100%'} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Box sx={{ width: { lg: '50%' } }}>
                            {faq.map((list, i) => (
                                <>
                                    <Grid item xs={12} my={1}>
                                        <Accordion expanded={expanded === `${i}`} onChange={handleChange(`${i}`)}>
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel1bh-content"
                                                id="panel1bh-header"
                                            >
                                                <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 'Bold', fontSize: 16 }}>{list.question}</Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: 14 }} >
                                                    {list.answer}
                                                </Typography>
                                            </AccordionDetails>
                                        </Accordion>
                                    </Grid>
                                </>
                            ))}
                        </Box>
                    </Box>
                </Grid>
            </Container>
        </Box >
    );
}

export default UserFaqs