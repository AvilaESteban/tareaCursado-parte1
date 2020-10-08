import React, { Component } from 'react';
import './color.css'

class PaletaColores extends Component {
    constructor(){
        super();
        this.state = {
            lista : [],
            color : ''
        };
    }

    componentDidMount(){
        //se usa para traer datos por primera vez del localStorage  o  para llamadas asincronas.
        const listaColores = JSON.parse(localStorage.getItem('lista'));
        if(listaColores){
          this.setState({
            lista: listaColores
          });
        }
      }
    

agregarColor = evt => {
    evt.preventDefault();
    const color =  evt.target.currentColor.value;
 
    if(!this.state.lista.includes(color)){  
    this.setState({
        lista: [...this.state.lista, color ]
    },
    this.actualizarLocalStorage
    );
  } else{
        alert(`el color ${color} ya fue agregado`);
    }  
} 


actualizarColor = evt => {
    this.setState({
        color: evt.target.value
    })
}

eliminarColor = colorAEliminar => {
   this.setState({
       lista: this.state.lista.filter(color => colorAEliminar !== color)
   },
   this.actualizarLocalStorage
   )
}

actualizarLocalStorage =() => localStorage.setItem('lista', JSON.stringify(this.state.lista));


    render() {
       return(
               <div className='paleta '>
               <form onSubmit={this.agregarColor}>
                 <div className='inputColor shadow p-3 m-5 bg-white rounded'>
                   <div className='inputColor_header m-2'>
                       <h3>Administrar Colores</h3>
                   </div>
                   <div className='inputColor_body d-flex  shadow p-5 mb-5 bg-info rounded"'>
                       <div 
                       className='inputColor_currentColor w-50 ml-5 '
                       style={{
                           backgroundColor: this.state.color
                       }}
                       />
                       <input
                       onChange={this.actualizarColor}
                       className='input w-100 '
                        type='text'  
                        name='currentColor'
                        placeholder='Ingrese un color: ej: blue'
                        />
                   </div>
                   <div className='inputColor_footer m-4'>
                       <button className='boton btn btn-primary btn-md ' type='submit'>Guardar</button>
                   </div>
                 </div>
                 </form>


                 <div className='listaColores '>
                    {
                      this.state.lista.map(color => (
                        <div key={color} className='colorPaleta shadow p-3 m-5 bg-white rounded w-50 '>
                           <div className='colorPaleta_header'>
                               <h3>{color}</h3>
                           </div>
                           <div className='colorPaleta_body shadow p-5 mb-5 bg-info rounded'>
                               <div
                                 className='inputColor_currentColor w-50 ml-5 '
                                 style={{
                                     backgroundColor: color
                                 }}
                               />
                           </div>
                           <div className='colorPaleta_footer '>
                               <button className='badge-danger badge-pill' onClick={() => this.eliminarColor(color)}>Eliminar</button>
                           </div>
                        </div>
                      ))
                    }
                 </div> 
               </div>
             );
     }       
}
export default PaletaColores;


