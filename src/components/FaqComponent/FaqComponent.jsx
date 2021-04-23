import React from 'react';
import FaqAccordion from './FaqAccordion';
import "./styles.scss";
import backgroundImg from "../../utils/background.svg";
import {FaQuestionCircle} from "react-icons/fa";
const FaqComponent = () => {
    return (
        <>
            <section className='faq_container' style={{backgroundImage:`url(${backgroundImg})`, height:'auto'}}>
                <h1> <FaQuestionCircle/> Preguntas frecuentes</h1>
                <FaqAccordion/>
            </section>
        
        </>
    )
}

export default FaqComponent