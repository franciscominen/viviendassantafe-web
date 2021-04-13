import React from 'react';
import AboutUsComponent from '../components/about/AboutUsComponent';
import {Link} from "react-router-dom";
import "./styles.scss";
import { ScaleFade } from "@chakra-ui/react";
import PrevBtn from '../utils/PrevBtn';
import NextBtn from '../utils/NextBtn';
import WspBtn from '../utils/WspBtn';

const AboutUsContainer = () => {
    const videoSource = "https://storage.coverr.co/videos/AkFALNeJmTP9IsipxgEDuFXwaQPZlW00H?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6Ijg3NjdFMzIzRjlGQzEzN0E4QTAyIiwiaWF0IjoxNjE3OTg3MjQwfQ.yGlSnszJRNLLXrlPW8In5FGttZFGubFRtyHe4G9P5kQ"
    return (
        <>
        <ScaleFade initialScale={0.7} in={true}>
            
        <video autoPlay="autoplay" loop="loop" muted className="video" playsinline="playsinline">
            <source src={videoSource}/>
        </video> 

        <section className='aboutUs-section'>

            <AboutUsComponent/>

            <div className='btns-container'>
                <Link to={"/beneficios"}>
                    <PrevBtn/>
                </Link>
                <Link to={"/aquenosdedicamos"}>
                    <NextBtn/>
                </Link>
            </div>

        </section>

        <WspBtn/>

        </ScaleFade>
        </>
    )
}

export default AboutUsContainer
