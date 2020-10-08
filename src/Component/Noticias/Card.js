import React from 'react';
import Img from '../Noticias/Img/imgNoticia1.jpg';
import Card from 'react-bootstrap/Card';

const CardNoticia = () => {
   return(
       <>
          <Card className="bg-dark text-white ">
           {/* <img className='h-50 w-50'  src={Img}   alt="1"></img> */}
            <Card.Img src={Img}  alt='1' />
            <Card.ImgOverlay>
              <Card.Title> Noticias Telemundo</Card.Title>
              <Card.Text>
                <h5> 24hs - Emisión Central</h5>
                <h1>#QuedateEnCasa</h1>
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
       </>
   )
}

export default CardNoticia;