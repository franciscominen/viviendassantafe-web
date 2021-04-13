import React from 'react';
import {FaWhatsapp} from "react-icons/fa";
import {AiOutlineInstagram, AiOutlineFacebook} from "react-icons/ai";
import {Link} from "react-router-dom";

const TopBar = () => {
    return (
        <div className='topbar-container'>
            <Link to={'/'}><img src={"/assets/img/logoBlanco.svg"} alt=""/></Link>
            <ul>
                <li><a href=""><FaWhatsapp/></a></li>
                <li><a href=""><AiOutlineInstagram/></a></li>
                <li><a href=""><AiOutlineFacebook/></a></li>
            </ul>
        </div>
    )
}

export default TopBar
