import React from 'react';
import { CarouselProvider, Slider, Slide, Dot, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import "./styles.scss";
import {BsBookmarkCheck} from "react-icons/bs";
import {RiSearchEyeLine} from "react-icons/ri";
import {IoHandRightOutline} from "react-icons/io5";

export default class extends React.Component {
    render() {
      return (
            <CarouselProvider
            naturalSlideWidth={2000}
            naturalSlideHeight={2000}
            totalSlides={3}
            isPlaying={true}
            interval={2000}
            infinite={true}
            isIntrinsicHeight={true}
            >
            <Slider>
                <Slide index={0}>
                    <div className='card-container'>
                        <BsBookmarkCheck className='icon'/>
                        <h3>Mision</h3>
                        <p>Lograr, mediante nuestro esfuerzo, responsabilidad y compromiso, que cada familia  que nos contacte, cumpla el sueño de tener su propio hogar.</p>   
                    </div>
                </Slide>
                <Slide index={1}>
                    <div className='card-container'>
                        <RiSearchEyeLine className='icon'/>
                        <h3>Vision</h3>
                        <p>Ofrecer la mejor calidad en construcción de bienes raíces, implementando procedimientos constructivos innovadores, para llegar a ser la empresa líder de la región.</p>
                    </div>
                    
                </Slide>
                <Slide index={2}>
                    <div className='card-container'>
                        <IoHandRightOutline className='icon'/>
                        <h3>Valores</h3>
                        <p>Confianza, transparencia, trabajo en equipo, integridad, responsabilidad, honestidad, respeto, seriedad,  constancia y sinceridad.</p>  
                    </div>
                </Slide>
                   
                    
            
            </Slider> 
            <div className='dots-container'>
                <Dot slide={0} className='dot' disabled='true'/>
                <Dot slide={1} className='dot'/>
                <Dot slide={2} className='dot'/>
            </div>
            </CarouselProvider>
      );
    }
}