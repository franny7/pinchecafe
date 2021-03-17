import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import './Nav.css';

const navbar = () => {
  return (
    <div className='nav'>
      <Navbar>
        <Navbar.Brand>Pinchè Cafè</Navbar.Brand>
      </Navbar>
    </div>
  );
};

export default navbar;
