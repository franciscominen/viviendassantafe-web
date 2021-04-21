import React from 'react';
import "./accordion.scss";
import {RiTimeLine, RiCustomerService2Line} from "react-icons/ri";
import {HiOutlineKey} from "react-icons/hi";
import {BsGraphUp} from "react-icons/bs";
import {AiOutlineCar} from "react-icons/ai"
import {GoHome} from "react-icons/go";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box
} from "@chakra-ui/react";

const BeneficiosComponent = () => {
    return (
        <Accordion allowToggle>
            <AccordionItem>
                <h2>
                <AccordionButton _expanded={{color: "#009D3C" }}>
                    <Box flex="1" textAlign="left" className='acc-title'>
                    <RiTimeLine style={{marginRight:'7px'}}/> Plazo de entrega 
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4} >
                Los plazos de entrega de las construcciones tienen un tiempo estimativo y variable de 45 a 90 días hábiles, dependiendo de los materiales y del diseño seleccionado.
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
                <h2>
                <AccordionButton _expanded={{color: "#009D3C" }}>
                    <Box flex="1" textAlign="left" className='acc-title'>
                    <HiOutlineKey style={{marginRight:'7px'}}/> Sistema de llave en mano 
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4} >
                Ofrecemos a los clientes nuestro sistema de llave en mano, con el cual vas a poder pagar las cuotas financiadas desde la comodidad de tu nuevo hogar. Una vez abonada la primera entrega, las llaves de la casa pasan a ser 100% del cliente.
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
                <h2>
                <AccordionButton _expanded={{color: "#009D3C" }}>
                    <Box flex="1" textAlign="left" className='acc-title'>
                    <BsGraphUp style={{marginRight:'7px'}}/> Planes de financiación 
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4} >
                Disponemos de diferentes planes de financiación, que son flexibles, en cuotas fijas o adaptables a tu necesidad, con el único objetivo de que cada cliente logre cumplir el sueño de tener su propio hogar. <br/> 
                Esta financiación comienza una vez terminado su hogar, es decir, se financia una casa terminada.              
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
                <h2>
                <AccordionButton _expanded={{color: "#009D3C" }}>
                    <Box flex="1" textAlign="left" className='acc-title'>
                    <AiOutlineCar style={{marginRight:'7px'}}/> Entrega de usado 
                    </Box>
                    <AccordionIcon />
                </AccordionButton >
                </h2>
                <AccordionPanel pb={4} >
                En Viviendas Santa Fe tomamos tu auto usado como parte de pago para tu nuevo hogar, brindando otra alternativa y posibilidad de forma de pago a nuestros clientes.           
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
                <h2>
                <AccordionButton _expanded={{color: "#009D3C" }}>
                    <Box flex="1" textAlign="left" className='acc-title'>
                    < GoHome style={{marginRight:'7px'}}/> Club Viviendas Santa Fe 
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4} >
                Nuestro contacto con los clientes es para toda la vida. Una vez construida tu casa serás parte de nuestro club con acceso a descuentos y beneficios exclusivos en ampliaciones, aberturas, casas.
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
                <h2>
                <AccordionButton _expanded={{color: "#009D3C" }}>
                    <Box flex="1" textAlign="left" className='acc-title'>
                       <RiCustomerService2Line style={{marginRight:'7px'}}/> Atención perzonalizada
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4} >
                Vas a tener un excelente trato y acompañamiento desde la venta hasta en el proceso de construcción de la casa. Somos un equipo formado por vendedores, ejecutivos, administrativos y cuadrillas especializadas que tenemos como objetivo que tu experiencia con nosotros sea la mejor de principio a fin. Nos caracteriza estar abiertos al diálogo.
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    )
}

export default BeneficiosComponent
