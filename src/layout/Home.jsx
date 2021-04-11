import React from 'react';
import "../App.scss";
import "./styles.scss";
import HomeCarousel from './HomeCarousel'
import {Link} from "react-router-dom";
import {RiArrowRightSLine} from "react-icons/ri";
import FadeIn from '../utils/FadeIn';
import VideoBg from './VideoBg';
import WspBtn from '../utils/WspBtn';

const Home = () => {
    return (
        <FadeIn duration={1000} delay={300}>

        <VideoBg/> 

        <section className="home_container">
            <h3 className='llave-en-mano'>#LlaveEnMano</h3>

            <HomeCarousel/> 

            <Link to={"/contacto"} className='contacto-btn'>
                Tener tu hogar es posible
                <RiArrowRightSLine className='icon'/>
            </Link>
        </section>

        <WspBtn/>
        </FadeIn>
    )
}

export default Home

