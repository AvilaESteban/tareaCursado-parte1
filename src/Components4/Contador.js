import React, { Component } from 'react';

 export class Contador extends Component{
    constructor() {
        super()
        this.state = {
           contador : 0
        }
    }
    
    sumar = () =>{
        this.setState({
            contador : this.state.contador + 1
        })
    }
    restar = () => {
        this.setState({
            contador : this.state.contador - 1
        })
    }

    render(){
        return(
          <div className='contador'>
              <button className='btn btn-primary w-50 m-2' onClick={this.sumar.bind(this)}>+</button>
              <button className='btn btn-danger w-50 m-2' onClick={this.restar.bind(this)}>-</button>
              <br></br>
              <span className='m-2'> <b>Contador: {this.state.contador}</b> </span>
          </div>
        );
    }
}

export default Contador;