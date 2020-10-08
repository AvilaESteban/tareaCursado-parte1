import React from 'react';
import Img from './Img/mundo.png';
import './noticia.css'

const Footer = () => {
    return(
        <>
        <h1 className='bg-dark text-white ico '>
        <a ><img className='icono'  src={Img}   alt="2"></img></a>
        <a ><img className='icono'  src={Img}   alt="2"></img></a>
        <a ><img className='icono'  src={Img}   alt="2"></img></a>
        </h1>
        </>  
   );
}

export default Footer;