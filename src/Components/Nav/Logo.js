import React from 'react';
import logo from '../../images/pinche-cafe-logo-3.png';

const Logo = () => {
  return (
    <div style={{ paddingLeft: '30px' }}>
      <a href='index.html'>
        <img
          src={logo}
          alt='Pinché Café'
          style={{
            width: '100px',
            margin: 'auto',
            display: 'inline-block',
          }}
        />
      </a>
    </div>
  );
};

export default Logo;
