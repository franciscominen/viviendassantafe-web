import React from 'react';
import "./styles.scss"

const VideoBg = () => {
    const videoSource = "https://cdn.pixabay.com/video/2021/04/19/71590.mp4"
    return (
        <video autoPlay="autoplay" loop="loop" muted className="video" playsinline="playsinline">
            <source src={videoSource}/>
        </video> 
    )
}

export default VideoBg