import React from 'react';
import "./styles.scss";
import { ScaleFade } from "@chakra-ui/react";
import {ImWhatsapp} from "react-icons/im";
import {FaInstagram} from "react-icons/fa";
import {AiOutlineFacebook} from "react-icons/ai";
import {RiContactsBookLine} from "react-icons/ri"
import {BiMap} from "react-icons/bi";
import ContactForm from './ContactForm';
import VideoBg from '../../layout/VideoBg';
import WspBtn from '../../utils/WspBtn';

const ContactUsComponents = () => {
    const videoSource = "https://storage.coverr.co/videos/GY2i1wg6G5CANVDKktvpoctVa1VDBHY7?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6Ijg3NjdFMzIzRjlGQzEzN0E4QTAyIiwiaWF0IjoxNjE3OTg3ODc4fQ.JhYgzqXPrWIweK14kEI3Xy4oNh_bRUtpEMq49cYwHQ8"
    return (
        <ScaleFade initialScale={0.7} in={true}> 

        <video autoPlay="autoplay" loop="loop" muted className="video contact-vid" style={{position:'absolute', top:'0'}}>
            <source src={videoSource}/>
        </video>

        <section className='contact-container'>

            <h1>Contacto <RiContactsBookLine/> </h1>

            <div className='components-container'>
            <div className='contact-info-container'>

                <div className='info-container'>
                    <article>
                        <h3>Telefo<span>nos</span></h3>
                        <p><ImWhatsapp/>342 511-111</p>
                        <p><ImWhatsapp/>342 511-111</p>
                    </article>
                    <article>
                        <h3>Re<span>des</span></h3>
                        <a href="https://www.instagram.com/viviendassantafe/" target='_blank'><FaInstagram/>@viviendassantafe</a>
                        <a href="https://www.facebook.com/VIVIENDASSANTAFE.S.R.L" target='_blank'><AiOutlineFacebook/>/viviendassantafeSRL</a>
                    </article>
                    <article>
                        <h3>Ofici<span>nas</span></h3>
                        <p><BiMap/>Saavedra 1699 - Santa Fe</p>
                        <p><BiMap/>Av Falucho 600 - San Jorge </p>
                    </article>
                </div>

                <div className='map-container'>
                    <h3>Ubicac<span>ion</span></h3>
                    <iframe src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3396.222456141176!2d-60.718687290578146!3d-31.655133098981146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b5a9ab7897451b%3A0xa74d1c4e73e990a3!2sSaavedra%201699%2C%20S3000EXO%20Santa%20Fe!5e0!3m2!1ses-419!2sar!4v1617654462366!5m2!1ses-419!2sar"} width="100%" height="200" loading="lazy" allowFullScreen="" style={{border:"2px solid #003B71", borderRadius:'10px'}}></iframe>
                </div>

            </div>
            
            <>
                <ContactForm/>
            </>

            </div>
        </section>

        <WspBtn/>
        </ScaleFade>
    )
}

export default ContactUsComponents