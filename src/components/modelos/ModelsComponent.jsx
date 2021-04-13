import React from 'react';
import FadeIn from '../../utils/FadeIn';
import TabsModels from './TabsModels';
import "./styles.scss";
import {RiPencilRuler2Line} from "react-icons/ri"
import WspBtn from '../../utils/WspBtn';

const ModelsComponent = () => {
    const videoSource = "https://player.vimeo.com/external/421545224.sd.mp4?s=1442cc0002a56d3eb9d620254c419b2615fb800a&profile_id=139&oauth2_token_id=57447761"
    return (
        <>
        <FadeIn duration={800}>
            <video autoPlay="autoplay" loop="loop" muted className="video modelos-vid" style={{position:'absolute', top:'0'}} playsinline="playsinline">
                <source src={videoSource}/>
            </video>

            <section className='modelos-container'>
                <h1 className='modelos-title'>Nuestros Modelos <RiPencilRuler2Line/></h1>

                <TabsModels/>
            </section>
            
            <WspBtn/>
            
        </FadeIn>

        </>
    )
}

export default ModelsComponent
