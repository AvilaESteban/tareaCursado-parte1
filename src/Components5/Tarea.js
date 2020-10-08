import React from 'react';

export const Tarea = (props) => {
    //Definimos una funcion para cuando el usuario haga click en el boton eliminar
    const  handleOnClick = () => props.eliminarTarea(props.tarea);

     return(
         <div className='tarea'>
           <p className='tarea_text text-light p-3'>{props.tarea}</p>
           <button
            className='tarea_close  badge-pill badge-danger'
            onClick={handleOnClick}
           >
               Eliminar Tarea
           </button>
         </div>
     );
};

export default Tarea;