import { FaWhatsapp } from "react-icons/fa";
import useMediaQuery from '@mui/material/useMediaQuery';



const AppWhatsapp = () => {
    const isMobile = useMediaQuery('(max-width: 600px)');

    return (
        <div style={{ position: "fixed", bottom: isMobile ? '1%' : '1%', right: '1%', zIndex: 999999 }}>
            <a aria-label="Chat on WhatsApp" href="https://wa.me/7611188004?text=urlencodedtext where whatsappphonenumber is a full phone number in international format and urlencodedtext is the URL-encoded pre-filled message.">
                {isMobile ? <FaWhatsapp style={{ fontSize: '40px', color: 'green', margin: '15px' }} /> : <FaWhatsapp style={{ fontSize: '45px', color: 'green', margin: '15px' }} />}
            </a>
        </div>
    )
}

export default AppWhatsapp;

