import React, {useState, useEffect} from "react";
import './App.scss';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './layout/Home';
import ContactUsComponent from './components/contact/ContactUsComponents';
import ModelsComponent from './components/modelos/ModelsComponent';
import GalleryContainer from './components/gallery/GalleryContainer';
import Navbar from "./components/navbar/Navbar";
import AboutUsContainer from "./containers/AboutUsContainer";
import DedicamosComponent from "./components/about/DedicamosComponent"
import BeneficiosComponent from "./components/about/BeneficiosComponent";
import TopBar from "./components/navbar/TopBar";
import LoaderComponent from "./utils/LoaderComponent";
import ProximamenteComponent from "./utils/ProximamenteComponent";

function App() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 4000)
  }, [])

  return (
    <section className='app-section'>
      {loading ?
        <LoaderComponent/>
         :
        <Router>

          <Navbar />
          <TopBar/>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/nosotros' exact component={AboutUsContainer} />
            <Route path='/aquenosdedicamos' component={DedicamosComponent} />
            <Route path='/beneficios' exact component={BeneficiosComponent} />
            <Route path='/contacto' exact component={ContactUsComponent} />
            <Route path='/modelos' exact component={ModelsComponent} />
            <Route path='/galeria' exact component={GalleryContainer} />
            <Route path='/proximamente' exact component={ProximamenteComponent} />
          </Switch>
        
        </Router> 
      }
    </section>
  );
}

export default App;