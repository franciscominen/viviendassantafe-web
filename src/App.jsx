import React from "react";
import './App.scss';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './layout/Home';
import ContactUsComponent from './components/contact/ContactUsComponents';
import ModelsComponent from './components/modelos/ModelsComponent';
import GalleryContainer from './components/gallery/GalleryContainer';
import Navbar from "./components/navbar/Navbar";
import AboutUsContainer from "./containers/AboutUsContainer";
import VideoBg from "./layout/VideoBg";
import DedicamosComponent from "./components/about/DedicamosComponent"
import BeneficiosComponent from "./components/about/BeneficiosComponent";

function App() {
  return (
    <section className='app-section'>
      <Router>

        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/nosotros' component={AboutUsContainer} />
          <Route path='/aquenosdedicamos' component={DedicamosComponent} />
          <Route path='/beneficios' component={BeneficiosComponent} />
          <Route path='/contacto' component={ContactUsComponent} />
          <Route path='/modelos' component={ModelsComponent} />
          <Route path='/galeria' component={GalleryContainer} />
        </Switch>
        
      </Router>
    </section>
  );
}

export default App;