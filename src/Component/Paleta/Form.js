import React from 'react';

const Form = (props) => {
    return(
        <form onSubmit={props.agregarColor}>
        <div className='inputColor'>
           <div className='inputColor_header'>
               <h3> Administrar colores </h3>
           </div>
           <div className='inputColor_body'>
              <div 
                 className='inputColor_currentColor' 
                 style={{
                     backgroundColor: props.color
                 }}
              />
              <input 
                 onChange={props.actualizarColor}
                 className='inputColor_input' 
                 type='text' 
                 name='currentColor'
                 placeholder='ingrese un color ej:blue'
               />
           </div>
           <div className='inputColor_footer'>
               <button type='submit'>Guardar</button>
           </div>
         </div>
        </form>
    )
}

export default Form;