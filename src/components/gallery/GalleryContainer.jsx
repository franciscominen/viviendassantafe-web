import React from 'react';
import "./styles.scss"
import GalleryComponent from './GalleryComponent';
import {HiOutlinePhotograph} from "react-icons/hi";

const GalleryContainer = () => {
    const videoSource = "https://storage.coverr.co/videos/sBGO88zm51yN1ZlP9QtGNVfHXdJHtzG00?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6Ijg3NjdFMzIzRjlGQzEzN0E4QTAyIiwiaWF0IjoxNjE3OTgxNjY2fQ.TktZcDoqLrRc6hGRMPOMtUnU0QsxzoVJzfMQWW4YyLE"
    return (
        <>
            <video autoPlay="autoplay" loop="loop" muted className="video gallery-vid" style={{position:'absolute', top:'0'}} playsinline="playsinline">
                <source src={videoSource}/>
            </video>

                <div className='galley-container'>
                    <div className='galery-components'>
                       <h1 className='gallery-title'>Galeria de fotos <HiOutlinePhotograph/></h1>
                        <GalleryComponent/> 
                    </div>
                </div>
            
        </>
    )
}

export default GalleryContainer
