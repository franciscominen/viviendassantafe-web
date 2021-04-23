import React from 'react';
import "./styles.scss";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box
  } from "@chakra-ui/react";

const FaqAccordion = () => {
    return (
        <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem>
                <h2>
                <AccordionButton>
                    <Box flex="1" textAlign="left">
                    ¿La construcción del hogar incluye la platea?
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                Sí. Todos nuestros modelos de hogares incluyen la construcción de la platea, para la cual utilizamos Hormigón H17. 
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
                <h2>
                <AccordionButton>
                    <Box flex="1" textAlign="left">
                    ¿Si tengo mi propio plano de la casa, ustedes pueden construirlo?
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                Sí. Somos una empresa que apunta a la construcción flexible y sin estrés. Por lo tanto, buscamos adaptarnos a cualquier necesidad de que tenga el cliente con respecto a su futuro hogar, y poder aconsejarlo siempre de de la mejor manera.
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
                <h2>
                <AccordionButton>
                    <Box flex="1" textAlign="left">
                    ¿El baño incluye las griferías?
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                Sí. Todos nuestros modelos de hogares incluyen las griferías en los baños. No se incluyen griferías en la cocina. 
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
                <h2>
                <AccordionButton>
                    <Box flex="1" textAlign="left">
                    ¿Los pisos son colocados por ustedes?
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    Sí, la colocación de pisos está incluída en nuestras construcciones y forma parte de la etapa final del proceso de construcción. Además, los tipos y modelos de pisos son a total elección del cliente. 
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
                <h2>
                <AccordionButton>
                    <Box flex="1" textAlign="left">
                    ¿El hogar tiene garantía?
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                Sí, todos nuestros hogares poseen garantia de tres años. 
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
                <h2>
                <AccordionButton>
                    <Box flex="1" textAlign="left">
                    ¿La casa es de ladrillo?
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                Sí, la casa esta complementamente revestida en ladrillo semi visto. 
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
                <h2>
                <AccordionButton>
                    <Box flex="1" textAlign="left">
                    ¿Como es el techo de la casa?
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                Los techos están compuestos por tiranteria de 2x6 en madera de Pino, y clavadores de 2x2 de madera Saligna y chapas zinc aluminizadas de calibre 25.
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
                <h2>
                <AccordionButton>
                    <Box flex="1" textAlign="left">
                    ¿La construcción de la casa incluye las aberturas?
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    Sí. Incluye aberturas de aluminio de primera calidad, perfileria Rossi de 36mm. Las mismas pueden ser totalmente personalizadas y adaptables al plano o tipo de vivienda que el cliente desee construir. 
                </AccordionPanel>
            </AccordionItem>
            
        </Accordion>
    )
}

export default FaqAccordion
