import React from 'react';

const WeatherInfo = (props) => {
    return(
        <>
         {
            props.error && 
            <div className='alert alert-danger'>
               <p>{props.error}</p>
            </div>
          }
          
          {
              props.temperature ?
              <div>
                  <div className='card shadow p-3 m-5 bg-white rounded '>
               <div className='card_header '>
                   <h1 className='text-white  badge-success'>Weather</h1>
               </div>
               <div className='card_body '>
                   <label className=' badge-pill badge-success btn-block'>Location</label>
                   <h4>City: {props.city} Country: {props.country} </h4>
                   <label className=' badge-pill badge-success btn-block'>Temperature </label>
                   <h4>Temperature: {props.temperature} °C.</h4>
                   <label className=' badge-pill badge-success btn-block'>Description</label>
                   <h4>Description: {props.description}</h4>
                   <label className=' badge-pill badge-success btn-block'>Humidity</label>
                   <h4>Humidity: {props.humidity} %</h4>
                   <label className=' badge-pill badge-success btn-block'>Wind speed</label>
                    <h4>Wind Speed: {props.wind_speed}</h4>
               </div>
               <div className='card_footer  badge-success '>
                   <h1 className=' text-white'>thanks for visiting our weather application</h1>
               </div>
             </div>
           </div>
           : <div className='card card-body shadow p-3 m-5 bg-white rounded'>
               <p>No Request Yet</p>
           </div>
          }
           
        </>
    );
}

export default WeatherInfo;