import React from 'react';

const Home = ({toggleDarkMode}) => (
     <>
    <h1>Home Page</h1>
    <hr></hr>
    <h1>Bienvenidos</h1>
    <h3>Tareas realizadas durante el cursado</h3>
    <h4>Parte 1</h4>
    <hr></hr>
     <button className='p-2' onClick={toggleDarkMode}>Cambiar theme</button>
    </>
) ;

export default Home;