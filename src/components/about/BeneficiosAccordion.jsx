import React from 'react';
import "./accordion.scss";
import {RiTimeLine, RiCustomerService2Line} from "react-icons/ri";
import {HiOutlineKey} from "react-icons/hi";
import {BsGraphUp} from "react-icons/bs";
import {AiOutlineCar} from "react-icons/ai"
import {BiCalendarCheck} from "react-icons/bi";
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
                Definimos los plazos de entrega de los hogares como un beneficio debido a que son relativamente cortos. Ya que varían entre los 20 y 90 días, dependiendo de los materiales y el diseño seleccionado por el cliente.
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
                Proponemos diferentes planes de financiación en nuestros modelos de hogares durante todo el año.  Los mismos incluyen descuentos, cuotas y flexibilidad en los pagos, con el único objetivo de que cada cliente logre cumplir el sueño de tener su propio hogar.                 
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
                En Viviendas Santa Fe tomamos tu auto usado como parte de pago de tu nuevo hogar, brindando una nueva y diferente alternativa como forma de pago a nuestros clientes.                
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
                <h2>
                <AccordionButton _expanded={{color: "#009D3C" }}>
                    <Box flex="1" textAlign="left" className='acc-title'>
                    < BiCalendarCheck style={{marginRight:'7px'}}/> Cuotras fijas 
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4} >
                Brindamos a nuestros clientes la modalidad de pago en cuotas fijas, una vez abonada la primera entrega de su nuevo hogar, para que el sueño de tener su propio hogar sea posible.
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
                <h2>
                <AccordionButton _expanded={{color: "#009D3C" }}>
                    <Box flex="1" textAlign="left" className='acc-title'>
                       <RiCustomerService2Line style={{marginRight:'7px'}}/> Atencion perzonalizada
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4} >
                Ofrecemos a los clientes nuestro sistema de llave en mano, con el cual vas a poder pagar las cuotas financiadas desde la comodidad de tu nuevo hogar. Una vez abonada la primera entrega, las llaves de la casa pasan a ser 100% del cliente.
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    )
}

export default BeneficiosComponent
