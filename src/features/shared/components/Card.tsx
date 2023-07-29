import { Grid, Card, CardHeader, CardContent, CardActionArea, List, ListItem, ListItemText } from '@mui/material';
import Typography from '@mui/material/Typography';
// import { motion } from "framer-motion";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import AppDialog from './dialog';

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

    const [open, setOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState({ content, title })

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

    const listItems = content.split('\n').map((item, index) => (
        <ListItem key={index}>
            <ListItemText primary={item} />
        </ListItem>
    ));


    const openDialogModel = () => {
        setOpen(true)
        setSelectedValue({ content, title })
    }

    const closeDialogModel = () => {
        setOpen(false)
    }

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
                    <Card onClick={openDialogModel} sx={{ maxWidth: { md: 380 }, borderColor: 'transparent', boxShadow: '0 2px 5px 2px rgba(0,0,0,0.2)', borderRadius: 4, margin: { md: '0 15px' } }}>
                        <CardActionArea>
                            <CardHeader
                                avatar={<img src={src} alt={cardAlt} style={{ width: '50px' }} />}
                                title={title}
                                titleTypographyProps={{ variant: 'h5', sx: { fontSize: '18px', } }}
                            />
                            <CardContent>
                                <Typography variant="body2" color="#746a6a" sx={{ fontSize: '15px', px: '2px', fontWeight: '600', textAlign: { xs: 'center', md: 'start' } }}>
                                    <List dense>
                                        {listItems}
                                    </List>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <AppDialog selectedValue={selectedValue} open={open} onClose={closeDialogModel} />
                    </Card>
                </motion.div>
            </Grid >
        </>
    )
}

export default AppCard;
