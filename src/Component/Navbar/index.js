import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => (
    <>
     <nav >
             <ul >
             <li>
                 <Link exact to="/">Inicio</Link>
               </li>
               <li >
                 <Link to="/Clock">Clock</Link>
               </li>
               <li >
                 <Link to="/ListaTareas">LisTarea</Link>
               </li>
               <li>
                 <Link to="/Paleta">Paleta</Link>
               </li>
               <li>
                 <Link to="/Noticias">Noticias</Link>
               </li>
               <li>
                 <Link to="/NoticiasHook">NoticiaHook</Link>
               </li>
               <li>
                 <Link to="/WeatherPrincipal">Clima</Link>
               </li>
               <li>
                 <Link to="/Table">TableForm</Link>
               </li>
               {/* <li>
                 <Link to="/FormPeliculas">FormPeli</Link>
               </li> */}
               <li>
                 <Link to="/Empleados">Empleados</Link>
               </li>
               <li>
                 <Link to="/FormularioSimple">FormSimple</Link>
               </li>
               {/* <li>
                 <Link to="/Tareas">Tareas</Link>
               </li> */}
               <li>
                 <Link to="/Contador">Contador</Link>
               </li>
               <li>
                 <Link to="/Mensaje3">Mensaje3</Link>
               </li>
               <li>
                 <Link to="/Mensaje2">Mensaj2</Link>
               </li>
               <li>
                 <Link to="/Mensaje">Mensaje</Link>
               </li>
               <li>
                 <Link to="/PaletaColores">Colores</Link>
               </li>
               <li>
                 <Link to="/Validations">Validations</Link>
               </li>
             </ul>
           </nav>
    
    </>
) ;

export default Navbar;