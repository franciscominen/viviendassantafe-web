import React from 'react';
import BeneficiosAccordion from "./BeneficiosAccordion";
import "./accordion.scss";
import {Link} from "react-router-dom";
import {IoIosArrowDown} from "react-icons/io";
import FadeIn from '../../utils/FadeIn';
import PrevBtn from '../../utils/PrevBtn';
import NextBtn from '../../utils/NextBtn';
import WspBtn from '../../utils/WspBtn';

const BeneficiosComponent = () => {
    const videoSource = "https://storage.coverr.co/videos/sBGO88zm51yN1ZlP9QtGNVfHXdJHtzG00?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6Ijg3NjdFMzIzRjlGQzEzN0E4QTAyIiwiaWF0IjoxNjE3OTgxNjY2fQ.TktZcDoqLrRc6hGRMPOMtUnU0QsxzoVJzfMQWW4YyLE"
    return (
        <FadeIn duration={800}>

        <video autoPlay="autoplay" loop="loop" muted className="video">
            <source src={videoSource}/>
        </video> 

        <section className='beneficios-container'>
            
            <div class='acc-container'>
                <h1>Te presentamos nuestros benefi<span>cios:</span></h1>
                <BeneficiosAccordion/>
            </div>

            <div className='btns-container'>
                <Link to={"/aquenosdedicamos"}>
                    <PrevBtn/>
                </Link>
                <Link to={"/nosotros"}>
                    <NextBtn/>
                </Link>
            </div>

        </section >
        <WspBtn/>
        </FadeIn>
    )
}

export default BeneficiosComponent
