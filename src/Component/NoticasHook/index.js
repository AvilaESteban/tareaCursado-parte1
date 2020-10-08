import React, { useState, useEffect } from "react";
import {categorias, paises, getApiUrl} from './config';
import ListaNoticia from "./ListaNoticia";
import Footer from './Footer';
import Nav from './Nav';
import './noticia.css';
import  Form from 'react-bootstrap/Form';
import {useParams} from 'react-router-dom';

const NoticiasHook = () =>{
    const {category} = useParams();
    const [categoria, setCategoria] = useState( category || 'general');
    const [pais, setPais] = useState('ar');
    const [listaNoticias, setListaNoticias] = useState([]);


// explicación
// useEffect(() =>{
//       aqui se genera el efecto,es decir, pasan cosas 
//       return() => {
//         aqui se limpian variables en memoria, por ej un setInterval
//       }
// }, [las variables cuasantes hacen que se genere un efecto])  

useEffect(() => {
   fetchNoticia();
}, [categoria,pais])

  const fetchNoticia = () => {
    fetch(getApiUrl(categoria, pais))
    .then(response =>{
        return response.json();
    })
    .then(myJson=>{
        setListaNoticias( myJson.articles);
    });
   }

    return( 
         <>
           <Nav/>
             <Form onSubmit={evt => evt.preventDefault()} className='form '>
               <Form.Group className='bg-dark text-white w-50' controlId="exampleForm.SelectCustom">
                 <Form.Label className='label p-2' >Seleccione una Categoria</Form.Label>
                 <Form.Control className=' bg-white text-white w-50' name='categoria'  as="select" custom onChange={evt => setCategoria(evt.target.value)}>
                    {
                        categorias.map(option => (
                        <option value={option}  className='bg-dark text-white' selected={categoria === option}>{option}</option>
                        ))
                    }
                 </Form.Control>
                </Form.Group>
                 <Form.Group className='bg-dark text-white w-50' controlId="exampleForm.SelectCustom2">
                  <Form.Label className='label p-2' >Seleccione una Pais</Form.Label>
                   <Form.Control className=' bg-white text-white w-50' name='pais'  as="select" custom onChange={evt => setPais(evt.target.value)}>
                    {
                        paises.map(option => (
                        <option value={option}  className='bg-dark text-white' selected={pais === option}>{option}</option>
                        ))
                    }
                 </Form.Control>
               </Form.Group>
             </Form>
            <ListaNoticia
                noticias={listaNoticias}
            />
           <Footer/>
        </>
      )
  }


export default NoticiasHook;