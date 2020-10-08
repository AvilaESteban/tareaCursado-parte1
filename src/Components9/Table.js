import React, {useState} from 'react';
import './Table.css'
import UserTable from './UserTable'
import { v4 as uuidv4 } from 'uuid';
import AddUserForm from './AddUserForm';
import EditUserForm from './EditUserForm';

const Table = () => {

    const usersData = [
        { id: uuidv4(), name: 'Tania', username: 'floppydiskette' },
        { id: uuidv4(), name: 'Craig', username: 'siliconeidolon' },
        { id: uuidv4(), name: 'Ben', username: 'benisphere' },
      ]
    
      const [users, setUsers] = useState(usersData)
      console.log(usersData)

    //   Agregar usuarios
    const addUser = (user) => {
        user.id = uuidv4()
        setUsers([
            ...users,
            user
        ])
    }

    // Eliminar usuarios
    const deleteUser = (id) => {
       console.log(id)

       setUsers(users.filter(user => user.id !== id))
    }
    
    // Editar Usuarios
    const [editing, setEditing] = useState(false);
    
    const [currentUser, serCurrentUser] = useState({
        id: null,
        name: '',
        username: ''
    })
  
    // Para recibir el form con los datos a editar, hacer:
    const editRow = (user) => {
        setEditing(true);
        serCurrentUser({
            id: user.id,
            name: user.name,
            username: user.username
        })
    }

    const updateUser = (id, updateUser) => {
        setEditing(false);
    //    funcion para actualizar, se recorre cada user con el map, por c/u de los usuarios se hace una pregunta, si user.id es igual al id entonces muestra al id actualizado con el updateUser sino sigue mostrando el user
        setUsers(users.map(user => (user.id === id? updateUser : user)))
    }

    return(
        <>
          <div className="container-A">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
            {/* Aqui hacemos una  condicional */}
            {
                editing ? (
                    <div>
                    <h2>Edit user</h2>
                    <EditUserForm
                     currentUser={currentUser}
                     updateUser={updateUser}
                    />
                    </div>
                ) : (
                    <div>
                     <h2>Add user</h2>
                     <AddUserForm  addUser={addUser}/>
                   </div>
                )
            }
       
         
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable 
             users={users}
             deleteUser={deleteUser} 
            //  setEditing={setEditing}
             editRow={editRow}
           />
        </div>
      </div>
    </div>
        </>
    );
}

export default Table;