import React from 'react';
import EmpleadoAvatar from './EmpleadoAvatar';

const EmpleadoRow = (props) => (
    <div className='empleadoRow'>
      <EmpleadoAvatar 
       src={props.empleado.pic}
       alt={props.empleado.fullName}
      />
      <div className='d-inline-block justify-content-around p-5'>
      <div className='empleadoRow_info '>
         <h4>{props.empleado.fullName}</h4>
      </div>
      <div className='empleadoRow_bussiness d-flex'>
         <p>{props.empleado.title}</p>
         <p className='badge-info badge-pill'>{props.empleado.department}</p>
      </div>
      </div>

    </div>
);

export default EmpleadoRow;