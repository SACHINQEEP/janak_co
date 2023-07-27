import { FaWhatsapp } from "react-icons/fa";

const AppWhatsapp = () => {
    // const isMobile = useMediaQuery('(max-width: 600px)');

    return (
        <div>
            <a aria-label="Chat on WhatsApp" href="https://wa.me/7611188004?text=urlencodedtext where whatsappphonenumber is a full phone number in international format and urlencodedtext is the URL-encoded pre-filled message.">
                {<FaWhatsapp style={{ fontSize: '45px', color: 'green', margin: '15px' }} />}
            </a>
        </div>
    )
}

export default AppWhatsapp;

