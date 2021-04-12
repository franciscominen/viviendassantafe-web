import React, {useState} from 'react';
import firebase from 'firebase/app';
import { getFirestore } from "../../firebaseConfig";
import {AiOutlineSend} from "react-icons/ai";
import {FaCheckCircle} from "react-icons/fa";

const ContactForm = () => {
    const [nombreCompleto, setNombreCompleto] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState ('');
    const [localidad, setLocalidad] = useState('');
    const [consulta, setConsulta] = useState('');
    const [consultaId, setConsultaId] = useState();
    const [date, setDate] = useState('');

    const enviarConsulta = (evt) => {
        evt.preventDefault();
        let purchaseDate = new Date();
        setDate(purchaseDate.toLocaleString());

        const nuevaConsulta = {
            cliente: {
                nombreCompleto: nombreCompleto,
                email: email,
                telefono: telefono,
                localidad: localidad,
                consulta: consulta
            },
            date: firebase.firestore.Timestamp.fromDate(purchaseDate)
        };

        const fsDB = getFirestore();
        const consultasCollection = fsDB.collection("CONSULTAS");

        consultasCollection
            .add(nuevaConsulta)
            .then(({ id }) => {
                setConsultaId(id);
            })
            .catch((err) => {
                console.log(err);
        });
    }

    return (
        <section className='contactForm-container'>
            {consultaId ? 
            <div className='consulta-realizada'>
                <FaCheckCircle/>
                <h2>Su consulta ha sido enviada</h2>
                <p>Su consulta fue enviada con exito, nos contactaremos con usted dentro de las proximas 24hs.</p>
            </div>
            :
            <div className='form-container'>
                <h2>Dejanos tu cons<span>ulta</span></h2>

                <form onSubmit={(evt) => {enviarConsulta(evt)}}>
                    <input 
                        type="text" 
                        placeholder="Nombre y Apellido*"
                        required
                        id="nombreCompleto" 
                        name="nombreCompleto" 
                        value={nombreCompleto} 
                        onChange={(evt) => {setNombreCompleto(evt.target.value)}}
                    />
                    <input 
                        type="text" 
                        placeholder="Direccion de Email*"
                        required
                        id="email" 
                        name="email" 
                        value={email} 
                        onChange={(evt) => {setEmail(evt.target.value)}}
                    />
                    <input 
                        type="text" 
                        placeholder="Telefono"
                        required
                        id="telefono" 
                        name="telefono" 
                        value={telefono} 
                        onChange={(evt) => {setTelefono(evt.target.value)}}
                    />
                    <input 
                        type="text" 
                        placeholder="Localidad"
                        required
                        id="localidad" 
                        name="localidad" 
                        value={localidad} 
                        onChange={(evt) => {setLocalidad(evt.target.value)}}
                    />
                    <textarea 
                        name="consulta" 
                        id="constulta" 
                        placeholder="Su consulta: *"
                        name="consulta" 
                        value={consulta} 
                        onChange={(evt) => {setConsulta(evt.target.value)}}
                        />

                    { consulta && nombreCompleto && email ? 
                        <button type="submit">Enviar <AiOutlineSend/></button> :
                        <button type="submit" style={{background:'#80808080'}}>Enviar <AiOutlineSend/></button>
                    }
                    
                        
                    
                </form>
            </div>
        }
        </section >
    )
}

export default ContactForm