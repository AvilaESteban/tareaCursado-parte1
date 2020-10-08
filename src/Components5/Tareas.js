import React  from 'react';
import Tarea from './Tarea';
// import './tareas.css';
 
class Tareas extends React.Component {
     constructor() {
         super();
         this.state = {
             lista: []
         };
     }

  componentDidMount(){
    //se usa para traer datos por primera vez del localStorage  o  para llamadas asincronas.
    const listaTareas = JSON.parse(localStorage.getItem('lista'));
    if(listaTareas){
      this.setState({
        lista: listaTareas
      });
    }
  }

  procesarFormulario = evt =>  {
      evt.preventDefault();
      const  tarea = evt.target.Tarea.value;
      if( this.state.lista.includes(tarea)) {
          alert('la tarea ya existe');
          return;
      }
 
  this.setState({
    lista: [...this.state.lista, tarea]
  },
  this.actualizarLocalStorage
  ) ;
}

eliminarTarea = tareaAEliminar  => {
  this.setState({
      lista: this.state.lista.filter( tarea => {
          return tareaAEliminar !== tarea;
      })
  },
  this.actualizarLocalStorage
  );
};

actualizarLocalStorage =() => localStorage.setItem('lista', JSON.stringify(this.state.lista));

render(){
    return(
        <div className='tareas_wrapper bg-dark h-100'>
            <form onSubmit={this.procesarFormulario}>
               <h1 className='bg-danger p-3'>Lista de tareas</h1>
               <h4 className='bg-dark text-light  p-3'>Ingrese tareas</h4>
              <input className='w-50 text-center' name='Tarea' type='text' placeholder='ingrese la tarea'/>
            </form>
            { this.state.lista.map( tarea => ( 
                <Tarea
                key={tarea} //siempre que trabajo con lista, se usa un  key unico 
                 tarea={tarea}
                 eliminarTarea={this.eliminarTarea}
                />
            ))}
         </div>
    );
  }
}

export default Tareas;