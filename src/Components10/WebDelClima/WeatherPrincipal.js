import React, {Component} from 'react';
import WeatherInfo from './WeatherInfo';
import WeatherForm from './WeatherForm';
import './Weather.css'

class WeatherPrincipal extends Component{

   state = {
       temperature: '',
       description:'',
       humidity:'',
       wind_speed: '',
       city:'',
       country:'',
       error: null
   }

   getWeather =  async(e)  => {
       e.preventDefault();
      const {city, country} =  e.target.elements;
      const cityValue = city.value;
      const countryValue = country.value;
      console.log(cityValue,countryValue);
      
     if(cityValue && countryValue) {  

      const ApiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue},${countryValue}ur&appid=054dd805e0060ac78e02d0c7f5614548&units=metric  `
      const response = await fetch(ApiURL);
      const data = await response.json();
      console.log(data);

     this.setState({
         temperature: data.main.temp,
         description: data.weather[0].description,
         humidity: data.main.humidity,
         wind_speed: data.wind.speed,
         city: data.name,
         country: data.sys.country,
         error: null
     }, () => console.log(this.state)
    );
   } else {
       this.setState({error: 'Please enter a city and a country'})
   }
}
   render() {  
    return(
        <>
        <nav className='bg-success '>
            <h1 className='text-white'>
               climate web
            </h1>
        </nav>
       <div className='container p-4'>
          <div className='row'>
              <div className='col-md-6  mx-auto'>
                   <WeatherForm getWeather={this.getWeather}/>
                   <WeatherInfo  {...this.state}/>
               </div>
           </div>
       </div>
       </>
    );
  }
}

export default WeatherPrincipal;


// units=metric sirve para usar en la api y convertir las temperatura en formato celsius