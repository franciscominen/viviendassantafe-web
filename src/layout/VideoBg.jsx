import React from 'react';
import "./styles.scss"

const VideoBg = () => {
    const videoSource = "https://player.vimeo.com/external/534088880.sd.mp4?s=73bc0abfe365fd2cff4365c94123fd4df2eab4e7&profile_id=164&oauth2_token_id=57447761"
    return (
        <video autoPlay="autoplay" loop="loop" muted className="video" playsinline="playsinline">
            <source src={videoSource}/>
        </video> 
    )
}

export default VideoBg