import { Grid, Card, CardHeader, CardContent, CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';
import { motion } from "framer-motion";

interface AppCardInterface {
    src: any,
    cardAlt: string,
    content: string,
    title: string
}

const AppCard = ({ src, cardAlt, content, title }: AppCardInterface) => {
    return (
        <>
            <Grid item xs={12} sm={6} md={6} lg={4} xl={3} my={2} >
                <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 250, damping: 9 }}>
                    <Card sx={{ maxWidth: 380, boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)', borderRadius: 4, margin: '0 15px' }}>
                        <CardActionArea>
                            <CardHeader
                                avatar={<img src={src} alt={cardAlt} style={{ width: '50px' }} />}
                                title={title}
                                titleTypographyProps={{ variant: 'h5', sx: { fontSize: '20px', } }}
                            />
                            <CardContent>
                                <Typography variant="body2" color="#746a6a" sx={{ fontSize: 16, px: 2, py: 2, fontWeight: 'bold' }}>
                                    {content}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </motion.div>
            </Grid>
        </>
    )
}

export default AppCard;
