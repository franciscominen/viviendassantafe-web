import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import "./styles.scss"

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
                    <h1>Vos lo <span>imaginas</span>, <br/> nosotros lo <span>construimos</span>.</h1>
                </Slide>
                <Slide index={1}>
                    <h1>Tener tu  <span>hogar</span>,<br/> es <span>posible</span>.</h1>
                </Slide>
                <Slide index={2}>
                    <h1>Tu <span>casa</span>, <br/>nuestro <span>compromiso</span>.</h1>
                </Slide>
            </Slider>
            </CarouselProvider>
      );
    }
}