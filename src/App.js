import React, {useState} from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}from 'react-router-dom';

import './App.css';
import PaletaColores from './Components/IndexColores'
import Mensaje from './Components1/Mensaje'
import Mensaje2 from './Components2/Mensaje2'
import Mensaje3 from './Components3/Mensaje3'
import Contador from './Components4/Contador'
import Tareas from './Components5/Tareas'
import FormularioSimple from './Components6/FormularioSimple'
import Empleados from './Components7/indexEmpleados'
import FormPeliculas from './Components8/FormPeliculas'
import Table from './Components9/Table';
import WeatherPrincipal from './Components10/WebDelClima/WeatherPrincipal';
import Clock from './Component/Clock/Clock';
import ListaTareas from './Component/Tareas/Index'
import Paleta from './Component/Paleta/index'
import Noticias from './Component/Noticias/Index'
import NoticiasHook from './Component/NoticasHook/index';
import ErrorPage from './Component/ErrorPage/index';
import Home from './Component/Home/index';
import Navbar from './Component/Navbar/index';
import Validations from './Component/Validations/index';



function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
      // hacemos que cdo setIsDarkMode tenga un valor cambie por el opuesto
      setIsDarkMode(!isDarkMode);
    }

  return (
    <div className="App">
      <Router>
         <div>
            <Navbar/>
            <div className={isDarkMode ? 'dark' : 'light'}>
           <Switch>
           <Route exact path='/'>
                <Home  toggleDarkMode={toggleDarkMode}/>
             </Route>
             <Route path='/Clock'>
                 <Clock/>
             </Route>
             <Route path='/ListaTareas'>
                <ListaTareas/>
             </Route>
             <Route path='/Paleta'>
               <Paleta/> 
             </Route>
             <Route path='/Noticias'>
               <Noticias/>
             </Route>
             <Route exact path='/NoticiasHook'>
               <NoticiasHook/>
             </Route>
             <Route  path='/NoticiasHook/:category'>
               <NoticiasHook/>
             </Route>
             <Route path='/WeatherPrincipal'>
             <WeatherPrincipal/>
             </Route>
             <Route path='/Table'>
             <Table/>
             {/* </Route>
             <Route path='/FormPeliculas'>
             <FormPeliculas/>  */}
             </Route>
             <Route path='/Empleados'>
             < Empleados/>
             </Route>
             <Route path='/FormularioSimple'>
             <FormularioSimple/>
             </Route>
             {/* <Route path='/Tareas'>
             < Tareas/>
             </Route> */}
             <Route path='/Contador'>
             < Contador/>
             </Route>
             <Route path='/Mensaje3'>
             < Mensaje3/>
             </Route>
             <Route path='/Mensaje2'>
             < Mensaje2/>
             </Route>
             <Route path='/Mensaje'>
             < Mensaje/>
             </Route>
             <Route path='/PaletaColores'>
             < PaletaColores/>
             </Route>
             <Route  path='/Validations'>
             < Validations/>
             </Route>
             <Route path='/'>
                <ErrorPage/>
             </Route>
           </Switch>
           </div>
         </div>
         </Router>  

         
       
    </div>
  );
}

export default App;

