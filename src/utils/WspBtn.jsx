import React from 'react';
import "./btns-styles.scss";
import {ImWhatsapp} from "react-icons/im"

const WspBtn = () => {
    return (
        
        <a className='wpp-btn-container' href="https://wa.me/5493425525362" target="_blank">
            <ImWhatsapp/>
            <span>Contactanos</span>   
        </a>
    )
}

export default WspBtn
