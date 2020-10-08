import React, { useState, useRef } from 'react';
import './style.css';


const Validations = () => {
    
    const [errors, setErrors] = useState([]);
    const [values, setValues] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);
    const myForm = useRef(null);

    const handleSubmit = (evt) => {
          evt.preventDefault();
          console.log('estoy en el submit');
    }
    
    const handleChange = (evt) => {
        console.log('estoy en el hanleChange');
        const input = evt.target;

        setValues({...values, [input.name]: input.value})
        handleErrors(input);
    }
    
    const handleErrors = (input) => {
        console.log('estoy en el hanleErrors');
        const isValid = input.checkValidity();
        const inputName = input.name;
        // si inputName es invalido y no esta en la lista, lo incluyo en la lista de error con setErrors
        if (!isValid && !errors.includes(inputName))  setErrors([...errors, inputName]);
        if (isValid && errors.includes(inputName)) setErrors(errors.filter((error)  => error !== inputName));

       setIsFormValid(myForm.current.checkValidity());
    }
    //si inputName tiene error muestra el hasError
    const hasError = (inputName) => errors.includes(inputName);

     const getBorderStyle = (inputName) => {
         if(Object.keys(values).includes(inputName) && !hasError(inputName))
         return 'valid'
         if(Object.keys(values).includes(inputName) && hasError(inputName))
         return 'invalid'

         return '';
     }

    return(
        <>
          <form id='myForm' ref={myForm} onSubmit={handleSubmit} className=' formValid' autoComplete='off'>
             <section>
                 <label htmlFor='userName'>Nombre</label>
                 <input
                    className={getBorderStyle('userName')}
                    onChange={handleChange}
                    type='text'
                    id='userName'
                    name='userName'
                    minLength='3'
                    maxLength='10'
                    required
                 />
                 {  
                 hasError('userName') && (
                 <p className='error'>
                     Este campo es requerido.Debe tener entre 3 y 10  caracteres.
                 </p>
                  )}
             </section>
             <section>
                 <label htmlFor='userEmail'>Email</label>
                 <input
                  className={getBorderStyle('userEmail')}
                    onChange={handleChange}
                    type='email'
                    id='userEmail'
                    name='userEmail'
                    required
                 />
                  {  
                 hasError('userEmail') && ( 
                 <p className='error'>
                     Debe ser un mail valido.
                 </p>
                 ) }
             </section>
             <section>
                 <label htmlFor='userPhone'>Telefono</label>
                 <input
                  className={getBorderStyle('userPhone')}
                    onChange={handleChange}
                    type='tel'
                    id='userPhone'
                    name='userPhone'
                    pattern='[0-9]+'
                    title='Solamente se aceptan números'
                    required
                 />
                  {  
                 hasError('userPhone') && ( 
                 <p className='error'>
                     Debe ser un número valido.
                 </p>
                ) }   
             </section>
             <section>
                 <label htmlFor='userAge'>Edad</label>
                 <input
                  className={getBorderStyle('userAge')}
                    onChange={handleChange}
                    type='number'
                    id='userAge'
                    name='userAge'
                    min='0'
                    max='110'
                    required
                 />
                  {  
                 hasError('userAge') && (
                 <p className='error'>
                     Debe ser una edad entre 0 u 110 años.
                 </p>
                 ) }
             </section>
             <button type='submit' disabled={!isFormValid}>
                 Guardar
             </button>
          </form>
        </>
    )
}

export default Validations;