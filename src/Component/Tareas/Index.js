import React from 'react';
import UnaTarea from './UnaTarea'
import Swal from 'sweetalert2'

class ListaTareas extends React.Component {
    constructor(){
        super();
        this.state = {
            lista: []
        };
    }

    componentDidMount() {
        const listaTareas = JSON.parse(localStorage.getItem('lista'));
        if (listaTareas) {
            this.setState({
                lista: listaTareas
            });
        }
    }


procesarFormulario = evt => {
    evt.preventDefault();
    const tarea = evt.target.Tarea.value;

    if(this.state.lista.includes(tarea)){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'La tarea ya existe!',
            footer: '<a href>Salir?</a>',
            // background: '#000'
            // timer: 5000,
            // timerProgressBar: true,
            // imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSWRLLTgz1T1TB8oyypgEBUa4PH2ErXeAl6RA&usqp=CAU',    
            // imageWidth:'100px'
        })
        // alert('la tarea ya existe');
        return;
    }

    this.setState({
        lista: [...this.state.lista,tarea]
    },() => localStorage.setItem('lista', JSON.stringify(this.state.lista))
  );
}

 eliminarTarea = tareaAEliminar => {
     this.setState(
         {
         lista: this.state.lista.filter(tarea => {
             return tareaAEliminar !== tarea;
         })
     },
     () => localStorage.setItem('lista', JSON.stringify(this.state.lista))
     );
 };


render(){
    return(
        <div className="tareas_wrapper container ">
            <form onSubmit={this.procesarFormulario} >
              <h3 className='p-2 shadow-dark shadow'>Bienvenidos</h3>
              <h4 className='p-2 shadow-dark shadow'>Ingresa tus tareas</h4>
              <input  name="Tarea" type="text" placeholder="ingrese una tarea"/>
            </form>
            {
                this.state.lista.map( tarea => (
                    <UnaTarea 
                    key={tarea} 
                    tarea={tarea}
                    eliminarTarea={this.eliminarTarea} />
                ))
            }
        </div>
    )
}
}

export default ListaTareas;