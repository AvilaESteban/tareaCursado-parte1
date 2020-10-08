import React from 'react';
import EmpleadoRow from './EmpleadoRow';

const EmpleadoList = props => (
    <div className='empleadoList  shadow p-3  bg-secondary rounded w-50 '>
   {
     props.empleado.map(empleado => (
       <EmpleadoRow  empleado={empleado} />
     ))  
   }
    </div>
);

export default EmpleadoList;