import { Grid, Card, CardHeader, CardContent, CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';
// import { motion } from "framer-motion";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

interface AppCardInterface {
    src: any,
    cardAlt: string,
    content: string,
    title: string
}

const boxVariant = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    hidden: { opacity: 0, y: 50 }
};

const AppCard = ({ src, cardAlt, content, title }: AppCardInterface) => {

    const control = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    }, [control, inView]);

    return (
        <>
            <Grid item xs={12} sm={6} md={6} lg={4} xl={3} my={2} >
                <motion.div
                    className="box"
                    ref={ref}
                    variants={boxVariant}
                    initial="hidden"
                    animate={control}
                >
                    <Card sx={{ maxWidth: 380, boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)', borderRadius: 4, margin: '0 15px' }}>
                        <CardActionArea>
                            <CardHeader
                                avatar={<img src={src} alt={cardAlt} style={{ width: '50px' }} />}
                                title={title}
                                titleTypographyProps={{ variant: 'h5', sx: { fontSize: '18px', } }}
                            />
                            <CardContent>
                                <Typography variant="body2" color="#746a6a" sx={{ fontSize: 15, px: 2, fontWeight: '600' }}>
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
