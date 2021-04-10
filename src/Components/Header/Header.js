import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './Header.css';

const Header = () => {
  return (
    <div>
      <Jumbotron>
        <h1 className='pt-5'>
          Welcome to <br />
          ¡Pinché Café!
        </h1>
        <p className=' pt-3 fs-3'>Wake up. Coffee. Innovate. Repeat.</p>
      </Jumbotron>
    </div>
  );
};

export default Header;
