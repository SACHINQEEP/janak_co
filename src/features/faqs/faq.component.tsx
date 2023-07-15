import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Grid, Container, CssBaseline } from '@mui/material'


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
                    <Grid item xs={12} md={6} lg={4} xl={3}>
                        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <Typography sx={{ color: 'text.secondary' }}>What is digital marketing?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Digital marketing refers to the use of digital channels and platforms to promote products, services, and brands. It encompasses various strategies such as search engine optimization (SEO), paid advertising, social media marketing, content marketing, and more, to connect with target audiences and drive business growth.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>

                    <Grid item xs={12} md={6} lg={4} xl={3}>
                        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2bh-content"
                                id="panel2bh-header"
                            >
                                <Typography sx={{ color: 'text.secondary' }}>
                                    Why is digital marketing important?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    In todays digital age, having a strong online presence is vital for businesses to reach their target audience effectively. Digital marketing offers a cost-effective way to reach a wider audience, generate leads, increase brand awareness, engage with customers, and drive conversions.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>

                    <Grid item xs={12} md={6} lg={4} xl={3}>
                        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel3bh-content"
                                id="panel3bh-header"
                            >
                                <Typography sx={{ color: 'text.secondary' }}>
                                    How can digital marketing benefit my business?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Digital marketing offers numerous benefits for businesses, including:<br />
                                    - Increased brand visibility and reach<br />
                                    - Targeted audience engagement<br />
                                    - Lead generation and customer acquisition<br />
                                    - Improved customer insights and data analytics<br />
                                    - Cost-effective marketing strategies<br />
                                    - Competitive advantage in the online marketplace<br />
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>

                    <Grid item xs={12} md={6} lg={4} xl={3}>
                        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel4bh-content"
                                id="panel4bh-header"
                            >
                                <Typography sx={{ color: 'text.secondary' }}>Which digital marketing services does your agency offer?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    At [Your Agency Name], we offer a comprehensive range of digital marketing services, including:<br />
                                    - Search Engine Optimization (SEO)<br />
                                    - Pay-Per-Click Advertising (PPC)<br />
                                    - Social Media Marketing<br />
                                    - Content Marketing<br />
                                    - Email Marketing<br />
                                    - Conversion Rate Optimization (CRO)<br />
                                    - Website Design and Development<br />
                                    - Online Reputation Management<br />
                                    - Influencer Marketing<br />
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>

                    <Grid item xs={12} md={6} lg={4} xl={3}>
                        <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel5bh-content"
                                id="panel5bh-header"
                            >
                                <Typography sx={{ color: 'text.secondary' }}>How do you measure the success of digital marketing campaigns?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    We use a combination of key performance indicators (KPIs) and data analytics to measure the success of our digital marketing campaigns. These may include metrics such as website traffic, conversion rates, click-through rates, engagement levels, and return on investment (ROI). We provide regular reports and insights to our clients, allowing them to track the progress and effectiveness of their digital marketing campaigns.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>


                    <Grid item xs={12} md={6} lg={4} xl={3}>
                        <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel6bh-content"
                                id="panel6bh-header"
                            >
                                <Typography sx={{ color: 'text.secondary' }}>How long does it take to see results from digital marketing efforts?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    The timeline for seeing results from digital marketing efforts can vary depending on various factors, including the competitiveness of your industry, the specific strategies implemented, and your target audience. While some results can be achieved relatively quickly, its important to note that digital marketing is an ongoing process that requires consistent effort and optimization for long-term success.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4} xl={3}>
                        <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel7bh-content"
                                id="panel7bh-header"
                            >
                                <Typography sx={{ color: 'text.secondary' }}>What sets your digital marketing agency apart from others?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    At [Your Agency Name], we pride ourselves on our unique approach that combines creativity, innovation, and data-driven strategies. Our experienced team of digital marketing experts stays up-to-date with the latest industry trends and best practices to deliver tailored solutions that drive real results for our clients. We prioritize transparency, communication, and a client-centric approach to ensure a seamless experience throughout our partnership.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>

                    <Grid item xs={12} md={6} lg={4} xl={3}>
                        <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel8bh-content"
                                id="panel8bh-header"
                            >
                                <Typography sx={{ color: 'text.secondary' }}>How much does digital marketing services cost?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    The cost of digital marketing services can vary depending on several factors, including the scope of work, the specific services required, and the size of your business. We offer customized solutions tailored to each clients needs and budget. During our initial consultation, we will assess your requirements and provide a comprehensive proposal with transparent pricing details.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4} xl={3}>
                        <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel9bh-content"
                                id="panel9bh-header"
                            >
                                <Typography sx={{ color: 'text.secondary' }}>Can digital marketing help my business with local targeting?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Absolutely! Digital marketing offers effective strategies for local targeting. Through tactics like local SEO, targeted advertising, and location-based social media marketing, we can help your business connect with your local audience, increase foot traffic to your physical store, and enhance your visibility within your community.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4} xl={3}>
                        <Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel10bh-content"
                                id="panel10bh-header"
                            >
                                <Typography sx={{ color: 'text.secondary' }}>How do you stay updated with the latest digital marketing trends?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Our team at [Your Agency Name] is committed to continuous learning and professional development. We regularly attend industry conferences, participate in webinars and workshops, and subscribe to reputable digital marketing publications. This enables us to stay informed about the latest trends, emerging technologies, and best practices in the ever-evolving digital marketing landscape.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4} xl={3}>
                        <Accordion expanded={expanded === 'panel11'} onChange={handleChange('panel11')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel11bh-content"
                                id="panel11bh-header"
                            >
                                <Typography sx={{ color: 'text.secondary' }}>Can you help with content creation for digital marketing campaigns?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Yes! Content creation is a fundamental aspect of effective digital marketing. Our agency offers comprehensive content marketing services, including blog posts, website copy, social media content, email newsletters, and more. We have a team of skilled content creators who specialize in crafting engaging, informative, and optimized content that resonates with your target audience and supports your marketing objectives.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4} xl={3}>
                        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2bh-content"
                                id="panel2bh-header"
                            >
                                <Typography sx={{ color: 'text.secondary' }}>Do you provide ongoing support and maintenance for digital marketing campaigns?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Absolutely! We believe in building long-term relationships with our clients. Our agency offers ongoing support and maintenance for digital marketing campaigns. We continuously monitor campaign performance, provide regular reporting and analysis, make data-driven optimizations, and keep you informed about the progress and success of your campaigns. Our team is always available to address any questions or concerns you may have.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default UserFaqs