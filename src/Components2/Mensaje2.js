import React, { Component } from 'react';

class Mensaje2 extends Component {
    constructor(props){
        super(props)
        this.state = { 
            NuevoMensaje : 'My Friends',
            otroMensaje : 'De Rolling Code School .!!'
        }
    }
    render(){
        return(
            <h1 >Hello, {this.state.NuevoMensaje}, {this.state.otroMensaje}</h1>
        );
    }
}

export default  Mensaje2;