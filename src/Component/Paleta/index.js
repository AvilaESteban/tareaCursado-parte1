import React from 'react';
import Form from './Form';
import './Paleta.css'
import ListaColor from './lista';

class Paleta extends React.Component{
      constructor(){
          super();
          this.state= {
              color: '',
              lista: []
         };
      }

      componentDidMount(){
          const lista = JSON.parse(localStorage.getItem('lista'));
          lista && this.setState({lista});
      }

     agregarColor = evt => {
         evt.preventDefault();
         const color = evt.target.currentColor.value
         
        //  opcion1
        if(this.state.lista.includes(color)){
            alert(`El color ${color} ya ha sido agregado anteriormente`);
            return;
        }
        this.setState({
            lista: [...this.state.lista, color ]
        } , this.actualizarLocalStorage);
        evt.target.reset();
    }
      

     actualizarColor = evt => {
         this.setState({
             color: evt.target.value
         })
     }
    
     eliminarColor = colorAEliminar => {
         this.setState({
             lista: this.state.lista.filter(color => colorAEliminar !== color)
         }, this.actualizarLocalStorage );
     }

     actualizarLocalStorage = () => localStorage.setItem('lista',JSON.stringify(this.state.lista));

    render(){
        return(
            < div className='paletaColores'>
               <Form
                  color={this.state.color}
                  agregarColor={this.agregarColor}
                  actualizarColor={this.actualizarColor}
               />
                <ListaColor
                    lista={this.state.lista}
                    eliminarColor={this.eliminarColor}
                />
            </ div>
        );
    }
}

export default Paleta;