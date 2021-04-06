import React from 'react';
import './Nav.css';
import Logo from './Logo';

// Create function to toggle menu down below in mobile-menu
const toggleDropdown = () => {
  let dropdownMenu = document.getElementById('dropdown-content');
  let menuIcon = document.getElementById('dropdown-logo');

  if (dropdownMenu.style.display === 'none') {
    dropdownMenu.style.display = 'flex';
    menuIcon.className = 'fas fa-window-close';
  } else {
    dropdownMenu.style.display = 'none';
    menuIcon.className = 'fas fa-bars';
  }
};

const navbar = () => {
  return (
    <div className='navbar nav bg-dark border-bottom border-light border-3'>
      <Logo />
      <div className='d-flex'>
        <ul className='nav-top'>
          <li className='nav-item'>
            <a href='#about-us' className='nav-link link-light nav-top-a'>
              About Us
            </a>
          </li>
          <li className='nav-item'>
            <a href='#popular-drinks' className='nav-link link-light nav-top-a'>
              Popular Drinks
            </a>
          </li>
          <li className='nav-item'>
            <a href='#footer' className='nav-link link-light nav-top-a'>
              Cafe info
            </a>
          </li>
        </ul>
      </div>

      <div className='res-menu'>
        <button
          onClick={toggleDropdown}
          style={{
            color: '#baa375',
            backgroundColor: '#212529',
            border: 'none',
            padding: '0',
            margin: '0 30px',
            fontSize: '40px',
          }}
        >
          <i id='dropdown-logo' className='fas fa-bars'></i>
        </button>
        <div id='dropdown-content' className='res-menu-content'>
          <ul>
            <li>
              <a href='#about-us' className='nav-link link-light'>
                About Us
              </a>
            </li>
            <li>
              <a href='#popular-drinks' className='nav-link link-light'>
                Popular Drinks
              </a>
            </li>
            <li>
              <a href='#footer' className='nav-link link-light'>
                Cafe Info
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default navbar;
