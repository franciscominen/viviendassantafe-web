import React from 'react';
import "./styles.scss";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import FadeIn from "../../utils/FadeIn";
import {CgSmartHomeRefrigerator, CgSmartHomeWashMachine} from "react-icons/cg";
import {IoBedOutline, IoRestaurantOutline} from "react-icons/io5";
import {BiBath} from "react-icons/bi";
import {GiSofa} from "react-icons/gi";
import {RiPencilRuler2Line} from "react-icons/ri"

const TabsModels = () => {
    return (
        <>  
            <Tabs>
                <TabList>
                    <Tab _selected={{ color:'white', background: "#009D3C" }} color='#003B71' background='none'>Modelo 3602</Tab>
                    <Tab _selected={{ color:'white', background: "#009D3C" }} color='#003B71' background='none'>Modelo 4702</Tab>
                    <Tab _selected={{ color:'white', background: "#009D3C" }} color='#003B71' background='none'>Modelo 6503</Tab>
                    <Tab _selected={{ color:'white', background: "#009D3C" }} color='#003B71' background='none'>Modelo 6602</Tab>
                </TabList>

                <TabPanels>

                    <TabPanel>
                        <FadeIn duration={1000}>
                        <section className='tab-panel'>
                            <div className='descript-container'>
                                <h2><span>Mod</span>elo 3602</h2>
                                <p>Este modelo cuenta con una superficie total de 6 x 6 metros,
                                2 dormitorios de 3 x 3 metros interiores, un baño y cocina con comedor.</p>
                            </div>

                            <img src={"/assets/img/models/3062.png"} style={{maxWidth:'300px'}}/>

                            <div className='caracteristicas-container'>
                                <h3>Caracteristicas:</h3>
                                <ul>
                                    <li> <RiPencilRuler2Line/> Sup. Total: 6x6 mts</li>
                                    <li> <IoBedOutline/> 2 dormitorios</li>
                                    <li> <BiBath/> 1 baño</li>
                                    <li> <CgSmartHomeRefrigerator/> Cocina</li>
                                    <li> <IoRestaurantOutline/> Comedor</li>
                                </ul>
                            </div>
                        </section>
                        </FadeIn>
                    </TabPanel>

                    <TabPanel>
                        <FadeIn duration={1000}>
                        <section className='tab-panel'>
                            <div className='descript-container'>
                                <h2><span>Mod</span>elo 4702</h2>
                                <p>El modelo 4702 cuenta con una superficie total de 7,8 x 6 metros,
                                2 dormitorios de 3 x 3 metros interiores, un baño, cocina y estar-comedor.</p>
                            </div>

                            <img src={"/assets/img/models/4702.png"} />

                            <div className='caracteristicas-container'>
                                <h3>Caracteristicas:</h3>
                                <ul>
                                    <li> <RiPencilRuler2Line/> Sup. Total: 7,8x6 mts</li>
                                    <li> <IoBedOutline/> 2 dormitorios</li>
                                    <li> <BiBath/> 1 baño</li>
                                    <li> <CgSmartHomeRefrigerator/> Cocina</li>
                                    <li> <IoRestaurantOutline/> Comedor - Estar</li>
                                </ul>
                            </div>
                        </section>
                        </FadeIn>
                    </TabPanel>

                    <TabPanel>
                        <FadeIn duration={1000}>
                        <section className='tab-panel'>
                            <div className='descript-container'>
                                <h2><span>Mod</span>elo 6503</h2>
                                <p>Nuestro modelo premium, con una superficie total de 10,8 x 6 metros interiores, dos baños, uno en suite, dos dormitorios, cocina, lavadero, estar-comedor y living.</p>
                            </div>

                            <img src={"/assets/img/models/6503.png"}/>

                            <div className='caracteristicas-container'>
                                <h3>Caracteristicas:</h3>
                                <ul>
                                    <li> <RiPencilRuler2Line/> Sup. Total: 10,8x6 mts</li>
                                    <li> <IoBedOutline/> 2 dormitorios</li>
                                    <li> <BiBath/> 2 baños</li>
                                    <li> <CgSmartHomeRefrigerator/> Cocina</li>
                                    <li> <IoRestaurantOutline/>Comedor - Estar</li>
                                    <li><GiSofa/>Living</li>
                                    <li> <CgSmartHomeWashMachine/> Lavadero</li>
                                </ul>
                            </div>
                        </section>
                        </FadeIn>
                    </TabPanel>

                    <TabPanel>
                        <FadeIn duration={1000}>
                        <section className='tab-panel'>
                            <div className='descript-container'>
                                <h2><span>Mod</span>elo 6602</h2>
                                <p>Nuestro modelo más vendido, con una superficie total de 7,8 x 9 metros interiores, un baño, dos dormitorios de 3x3 metros interiores, cocina, comedor, y living por separado.</p>
                            </div>

                            <img src={"/assets/img/models/6602.png"} />

                            <div className='caracteristicas-container'>
                                <h3>Caracteristicas:</h3>
                                <ul>
                                    <li> <RiPencilRuler2Line/> Sup. Total: 7,8x9 mts</li>
                                    <li> <IoBedOutline/> 2 dormitorios</li>
                                    <li> <BiBath/> 1 baño</li>
                                    <li> <CgSmartHomeRefrigerator/> Cocina</li>
                                    <li> <IoRestaurantOutline/>Comedor</li>
                                    <li><GiSofa/>Living</li>
                                </ul>
                            </div>
                        </section>
                        </FadeIn>
                    </TabPanel>

                </TabPanels>
            </Tabs>
        </> 
    )
}

export default TabsModels