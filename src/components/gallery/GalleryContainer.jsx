import React from 'react';
import "./styles.scss"
import GalleryComponent from './GalleryComponent';
import WspBtn from '../../utils/WspBtn';

const GalleryContainer = () => {
    const videoSource = "https://storage.coverr.co/videos/sBGO88zm51yN1ZlP9QtGNVfHXdJHtzG00?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6Ijg3NjdFMzIzRjlGQzEzN0E4QTAyIiwiaWF0IjoxNjE3OTgxNjY2fQ.TktZcDoqLrRc6hGRMPOMtUnU0QsxzoVJzfMQWW4YyLE"
    return (
        <>
            <video autoPlay="autoplay" loop="loop" muted className="video gallery-vid" style={{position:'absolute', top:'0'}}>
                <source src={videoSource}/>
            </video>
            
            <div className='galley-container'>
                <GalleryComponent/>
            </div>

        </>
    )
}

export default GalleryContainer
