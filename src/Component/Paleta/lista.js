import React from 'react';

const ListaColor = props => {
    return(
        <div className='listaColores'>
        {
            props.lista.map(color => (
                <div  key={color} className='colorPaleta'>
                 <div  className='colorPaleta_header'>
                     <h3>{color}</h3>
                 </div>
                 <div className='colorPaleta_body'>
                   <div
                     className='colorPaleta_color'
                     style={{
                         backgroundColor:color
                     }}
                   />       
                 </div>
                 <div className='colorPaleta_footer'>
                    <button onClick={() => props.eliminarColor(color)}>Eliminar</button>
                 </div>
                </div>
            ))
        }
    </div>
    )
}

export default ListaColor;