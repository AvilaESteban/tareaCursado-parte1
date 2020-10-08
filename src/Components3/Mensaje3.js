import React, { Component } from 'react';

class Mensaje2 extends Component {
    constructor(){
        super()
        this.state = { 
            NuevoMensaje : 'My Friends',
            otroMensaje : 'De Rolling Code School .!!',
            text : "Initial text"
        }
    }

    clicked(text) {
       this.setState({
           text : text
       })
        console.log('boton clickeado')
    }
    
    render(){
        return(
            <div>
            <h1 >Hello, {this.state.NuevoMensaje}, {this.state.otroMensaje}<br/> {this.state.text}  </h1>
            <button 
            className='msj'
            onClick= {(e) => {this.clicked("From changed state !!"); }  }   >Click</button>
            </div>
        );
    }
}

export default  Mensaje2;