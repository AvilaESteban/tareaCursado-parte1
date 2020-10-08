import React from 'react';

const UnaTarea = (props) => {

    const handleOnClick = () => props.eliminarTarea(props.tarea);

    return(
      <div className='tarea '>
          <h3 > Tarea Ingresada</h3>
         <p  className='tarea_text '>{props.tarea}</p>
         <button className='tarea_close btn btn-danger '  onClick={handleOnClick}>
            Eliminar 
         </button>
      </div>
    )
}

export default UnaTarea;