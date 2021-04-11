import React from 'react';
import "./styles.scss";

const AboutUsComponent = () => {
    return (
        <section className='aboutUs-container'>
            <div className='descrip-container'>
                <h1>Quienes so<span>mos?</span> </h1>
                <p>Somos una empresa de la ciudad de Santa Fe capital que se cataloga dentro de rubro de bienes raíces. Abrimos nuestras puertas en el año 2017.
                <br/>
                <br/>
                Desde ese entonces, hasta hoy en día, hemos logrado que 170 familias elijan Viviendas Santa Fe, 
                y con nuestro compromiso, esfuerzo y trabajo, cumplan el sueño de tener su propio hogar.</p>
            </div>
            <div className='logo-container'>
                <img src={"/assets/img/logoBig.png"} alt=""/>
            </div>
        </section>
    )
}

export default AboutUsComponent
