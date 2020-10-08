import React, { Component } from "react";
import {categorias, getApiUrl} from './config';
import ListaNoticia from "./ListaNoticia"
import Footer from './Footer';
import Nav from './Nav';
import './noticia.css';
import  Form from 'react-bootstrap/Form';


class Noticias extends Component {
    constructor(){
        super();
        this.state = {
            categoria: 'general',
            listaNoticias: []
        }
    }
   
   componentDidMount(){
     this.fetchNoticia();
   }

   seleccionarCategoria = evt => {
       this.setState({categoria: evt.target.value }, this.fetchNoticia);
       console.log(evt.target.value);
   }

   fetchNoticia = () => {
    fetch(getApiUrl(this.state.categoria))
    .then(response =>{
        return response.json();
    })
    .then(myJson=>{
        this.setState({listaNoticias: myJson.articles})
    });
   }
  

  render() {
    return( 
         <>
           <Nav/>
             {/* sin react boostraps */}
            {/* <form onSubmit={evt => evt.preventDefault()}>
            <h3 className='badge badge-danger w-100 p-2'>Seleccionar Categoria</h3>
            <select name='categoria' onChange={this.seleccionarCategoria}>
                    {
                        categorias.map(option => (
                        <option value={option} selected={this.state.categoria === option}>{option}</option>
                        ))
                    }
                </select>
             </form> */}

             {/* con react  boostraps */}
             <Form onSubmit={evt => evt.preventDefault()}>
               <Form.Group className='bg-dark text-white' controlId="exampleForm.SelectCustom">
                 <Form.Label className='label p-2' >Seleccione una Categoria</Form.Label>
                 <Form.Control className=' bg-white text-white w-50' name='categoria'  as="select" custom onChange={this.seleccionarCategoria}>
                    {
                        categorias.map(option => (
                        <option value={option}  className='bg-dark text-white' selected={this.state.categoria === option}>{option}</option>
                        ))
                    }
                 </Form.Control>
               </Form.Group>
             </Form>
            <ListaNoticia
                noticias={this.state.listaNoticias}
            />
           <Footer/>
        </>
      )
  }
}

export default Noticias;


{/* <main>
               {
                   this.state.listaNoticias.map((noticia)=> ( 
             <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                 <div className="carousel-item active">
                  <img src={noticia.urlToImage} className="d-block w-50" alt={noticia.title}/>
                   </div>
                    <div className="carousel-item">
                     <img src={noticia.urlToImage} className="d-block w-50" alt={noticia.title}/>
                   </div>
                   <div className="carousel-item">
                     <img src={noticia.urlToImage} className="d-block w-50" alt={noticia.title}/>
                   </div>
                 </div>
                 <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="sr-only">Next</span>
                    </a>
               </div>
               ))
               }
            </main> */}