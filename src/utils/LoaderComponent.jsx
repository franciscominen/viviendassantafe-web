import React from 'react';
import "./btns-styles.scss"

const LoaderComponent = () => {
    return (
        <div className='loader-container'>
            <img src={'assets/img/logoBig.png'} alt=""/>
            <h1>Cargando...</h1>
        </div>
    )
}

export default LoaderComponent
