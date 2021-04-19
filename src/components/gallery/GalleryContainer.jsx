import React, {useState, useEffect} from 'react';
import "./styles.scss"
import GalleryComponent from './GalleryComponent';
import {ScaleFade} from "@chakra-ui/react"
import {HiOutlinePhotograph} from "react-icons/hi";
import LoaderComponent from '../../utils/LoaderComponent';

const GalleryContainer = () => {
    const videoSource = "https://storage.coverr.co/videos/sBGO88zm51yN1ZlP9QtGNVfHXdJHtzG00?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6Ijg3NjdFMzIzRjlGQzEzN0E4QTAyIiwiaWF0IjoxNjE3OTgxNjY2fQ.TktZcDoqLrRc6hGRMPOMtUnU0QsxzoVJzfMQWW4YyLE"
    
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
        setLoading(false)
        }, 3000)
    }, [])

    return (
        <>
        {loading ?
         <LoaderComponent/> :
            <>
            <ScaleFade initialScale={0.7} in={true}> 
            <div className='galley-container'>
                <div className='galery-components'>
                    <h1 className='gallery-title'>Galería de fotos <HiOutlinePhotograph/></h1>
                    <GalleryComponent/> 
                </div>
            </div>
            </ScaleFade> 
            </>
        }
            
        </>
    )
}

export default GalleryContainer
