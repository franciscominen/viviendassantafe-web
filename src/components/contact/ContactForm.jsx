import React from 'react';
import {AiOutlineSend} from "react-icons/ai"


const ContactForm = () => {
    return (
        <section className='contactForm-container'>
            <h2>Dejanos tu cons<span>ulta</span></h2>

            <form action="">
                <input 
                    type="text" 
                    placeholder="Nombre y Apellido*"
                    required
                />
                <input 
                    type="text" 
                    placeholder="Direccion de Email*"
                    required
                />
                <input 
                    type="text" 
                    placeholder="Telefono"
                    required
                />
                <input 
                    type="text" 
                    placeholder="Localidad"
                    required
                />
                <textarea name="" id="" placeholder="Su contulta*"/>
                <button type="submit">Enviar <AiOutlineSend/></button>
            </form>
        </section >
    )
}

export default ContactForm
