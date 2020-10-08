import React, { useState } from 'react';
import {useForm} from 'react-hook-form';

const FormPeliculas = () => {

    const {register,errors,handleSubmit} = useForm();
    const [ Peliculas, setPeliculas] = useState([]);
    
    const onSubmit = (dato, e) =>{
        console.log(dato);
        setPeliculas([ 
            ...Peliculas,
            dato
        ])
        e.target.reset();
    }


    return(
        <>
        <div className='container bg-secondary p-2 shadow '>
        <h1> formulario Alta Películas</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
              <label className='text-white'>Ingrese Nombre de su Pelicula preferida</label>
             <input
                name='nombre'
                placeholder='Ej: La era de hielo'
                className='form-control'
                ref= {
                    register({
                        required: {value: true, message:'campo obligatorio'},
                        mixLength: {value: 6, message:'Minimo 8 letras'},
                        maxLength: {value: 12, message:'Maximo 8 letras'}
                    })
                }
             />
             <span className='text-warning text-small d-block mb-2'>
                 {errors?.nombre?.message}
             </span>
             <label className='text-white'>Ingrese una breve descripción </label>
             <input
                name='descripcion'
                placeholder='Ej: Pelicula de entretenimiento para niños'
                className='form-control'
                ref= {
                    register({
                        required: {value: true, message:'campo obligatorio'},
                        maxLength: {value: 30, message:'Maximo 30 caracteres, "Hacer Breve Descripcion" '}
                    })
                }
             />
             <span className='text-warning text-small d-block mb-2'>
                 {errors?.descripcion?.message}
             </span>
             <label className='text-white'>Seleccione un genero </label>
             <select
              name="genero" 
              className='w-100 form-group'
              ref={
                  register({
                    required: {value: true, message:'campo obligatorio'}
                  })
                  }>
                 <option value="comedia">Comedia</option>
                 <option value="drama">Drama</option>
                 <option value="infantil">Infantil</option>
            </select>
             <span className='text-warning text-small d-block mb-2'>
                 {errors?.genero?.message}
             </span>
             <button className='btn btn-dark w-50'>Enviar</button>
          </form>
        </div>
        <br></br>
        <div className='container w-50 bg-dark p-2'>
         <div className='card bg-info'>
              {
                  Peliculas.map(item => 
                    <div className='card-body'>
                       <div className='card-header bg-dark text-white m-2 p-2'>
                        <p className='badge-secondary badge-pill'>Nombre de Pelicula</p>
                          {item.nombre}
                       </div> 
                       <div className='card-body bg-dark text-white m-2 p-2'>
                       <p className='badge-secondary badge-pill'>Descripcion de Pelicula</p>   
                       {item.descripcion}
                       </div>    
                       <div className='card-footer bg-dark text-white m-2 p-2'> 
                       <p className='badge-secondary badge-pill'>Genero de Pelicula</p>
                        {item.genero}
                      </div>
                      <button className='badge-dark badge-pill text-white'>Eliminar</button>
                    </div>
                    )
              }
          </div>
         </div>
        </>
    );
}

export default FormPeliculas;