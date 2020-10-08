import React from 'react';
import CardNoticia from './Card'
import Navbar from 'react-bootstrap/Navbar';


const Nav = () => {
    return(
       <>
          <Navbar expand="lg" variant="dark" bg="dark" >
            <Navbar.Brand href="#">Noticias</Navbar.Brand>
          </Navbar>
          <CardNoticia/>
       </>
    )
};
 



export default Nav;