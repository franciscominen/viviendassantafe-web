import React from 'react';
import "./styles.scss";

const AboutUsComponent = () => {
    return (
        <section className='aboutUs-container'>
            <div className='descrip-container'>
                <h1>¿Quiénes so<span>mos?</span> </h1>
                <p>
                    Somos una empresa de la ciudad de Santa Fe Capital que se cataloga dentro de rubro de bienes raíces. Abrimos nuestras puertas en el <span style={{color:'green'}}>año 2017</span>.
                    <br/> <br/>
                    Desde ese entonces hasta hoy en día, hemos logrado que <span style={{color:'green'}}>190 familias </span>elijan Viviendas Santa Fe,  y con nuestro compromiso, esfuerzo y trabajo cumplan el sueño de tener <span style={{color:'green'}}>su propio hogar</span>.
                </p>
            </div>
            <div className='logo-container'>
                <img src={"/assets/img/logoBig.png"} alt=""/>
            </div>
        </section>
    )
}

export default AboutUsComponent
