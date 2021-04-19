import React from 'react';
import {FaWhatsapp} from "react-icons/fa";
import {AiOutlineInstagram, AiOutlineFacebook} from "react-icons/ai";
import {Link} from "react-router-dom";

const TopBar = () => {
    return (
        <div className='topbar-container'>
            <Link to={'/'}><img src={"/assets/img/logoBlanco.svg"} alt=""/></Link>
            <ul>
                <li><a href="https://wa.me/5493425525362" target="_blank"><FaWhatsapp/></a></li>
                <li><a href="https://www.instagram.com/viviendassantafe/" target="_blank"><AiOutlineInstagram/></a></li>
                <li><a href="https://www.facebook.com/VIVIENDASSANTAFE.S.R.L" target="_blank"><AiOutlineFacebook/></a></li>
            </ul>
        </div>
    )
}

export default TopBar
