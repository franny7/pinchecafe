import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './Header.css';

const Header = () => {
  return (
    <div className='div-border'>
      <Jumbotron>
        <h1 className='header-padding'>
          Welcome to <br />
          ¡Pinché Café!
        </h1>
        <p className='header-p'>Wake up. Coffee. Innovate. Repeat.</p>
      </Jumbotron>
    </div>
  );
};

export default Header;
