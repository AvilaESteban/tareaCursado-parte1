import React from 'react';

const EmpleadoAvatar = props => (
  <div className='empleadoAvatar'>
<img src={`/assets/${props.src}`} alt={ props.alt} />
  </div>
);

export default EmpleadoAvatar;