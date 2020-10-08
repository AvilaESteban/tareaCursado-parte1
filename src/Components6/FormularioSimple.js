import React,{ useState } from "react";

const FormularioSimple = () => {

    const [datos, setDatos] = useState({
        nombre : '',
        apellido : '',
        dni : '',
        email :''
    })

       

  const  handleInput = (e) => {
        console.log( e.target.value);
        setDatos ({
           ...datos,
           [e.target.name] : [e.target.value]
        })
    }
    


   const  handleSubmit = (evt) => {
        evt.preventDefault();
       console.log(datos.nombre  + ' ' +  datos.apellido  +  datos.dni  +  ' ' + datos.email + '')
        if(datos.nombre == '' || datos.apellido || datos.email || datos.dni) {
            alert('complete todos los campos, por favor')
        }
        else{ 
        alert('Datos enviados')
     }
    } 

   
       return(
           <>
          <h1 className='bg-info' >Formulario Simple</h1>
          <div className='card  my-4 p-4 l-8 '> 
             <form onSubmit={handleSubmit} className=' m-5'>
                 <div className='Form-group '>
                    <label>Nombres</label>
                    <input
                     type='text'
                     name='nombre'
                     onChange={handleInput}
                     className='form-control'
                     placeholder='Ingrese Nombres'
                    />
                 </div>
                 <div className='Form-group '>
                    <label>Apellido</label>
                    <input
                     type='text'
                     name='apellido'
                     onChange={handleInput}
                     className='form-control'
                     placeholder='Ingrese Apellido'
                    />
                 </div>
                 <div className='Form-group '>
                    <label>Dni</label>
                    <input
                     type='number'
                     name='dni'
                     onChange={handleInput}
                     className='form-control'
                     placeholder='Ingrese dni'
                    />
                 </div>
                 <div className='Form-group '>
                    <label>Email</label>
                    <input
                     type='email'
                     name='email'
                     onChange={handleInput}
                     className='form-control'
                     placeholder='Ingrese tuemail@gmail.com'
                    />
                 </div>
                 <br></br>
                 <button type='submit' className=' badge-info w-100 '>Enviar</button>
             </form>
             <h3>
                 {datos.nombre} 
                - {datos.apellido}
                - {datos.dni} 
                 -{datos.email}
             </h3>
          </div>
          
        </>
       );
     } 


export default FormularioSimple;
