import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Img from './Img/mundo.png';

const ListaNoticia = ({ noticias }) => (
  <div className="listaNoticias">
    {noticias.map(
        ({title, description,url, urlToImage,content}) => (
            <Card key={title} style={{ width: '18rem' }} >
             <Card.Header className='bg-dark text-white' > <img className='icono'  src={Img}   alt="2"></img> Telemundo Noticias </Card.Header>  
            <Card.Img  variant="top" src={urlToImage} />
            <Card.Body>
        <Card.Title>{title}</Card.Title>
              <Card.Text>
              {description} {content}
              </Card.Text>
              <Button href={url} target='_blank'  variant="primary">Ver Más...</Button>
            </Card.Body>
          </Card>
        )
    )}
  </div>
);

export default ListaNoticia;
