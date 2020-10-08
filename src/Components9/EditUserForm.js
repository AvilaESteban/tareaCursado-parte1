import React from 'react';
import {useForm} from 'react-hook-form'

const EditUserForm = (props) => {
    
   console.log(props.currentUser)

    const { register, handleSubmit, errors, setValue} = useForm({
        // defaultValues incorpora el value que ya tiene la tabla y la pasa al form donde la modificaremos 
        defaultValues: props.currentUser
    })
    // setValue toma el value de cada input al hacer click en edit
    setValue('name', props.currentUser.name);
    setValue('username', props.currentUser.username);

    const onSubmit = (data,e) => {
        console.log(data)

        data.id = props.currentUser.id
        props.updateUser(props.currentUser.id, data)

        e.target.reset();
    }
 
    return(
        <>
         <form  onSubmit={handleSubmit(onSubmit)}> 
            <label>Name</label>
              <input type="text" name="name" 
              ref={
                  register({
                    required:{ value:true, message: 'Campo Requerido'}
                  })
              }
              />
              <div  className='text-danger'>
                  {errors?.name?.message}
              </div>
              <label>Username</label>
              <input type="text" name="username"
               ref={
                register({
                  required:{ value:true, message: 'Campo Requerido'}
                })
            }
              />
               <div className='text-danger'>
                  {errors?.username?.message}
              </div>
              <button>Edit user</button>
         </form>
        </>
    )
}

export default EditUserForm;