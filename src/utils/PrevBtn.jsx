import React from 'react';
import "./btns-styles.scss";
import {FaArrowLeft} from "react-icons/fa";

const PrevBtn = () => {
    return (
        <div className='btn-container'>
            <FaArrowLeft className='icon'/>
        </div>
    )
}

export default PrevBtn
