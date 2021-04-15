import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer-ref'>
      <div className='border-top border-light'>
        <div id='footer' className='row justify-content-center'>
          <div className='p-3 mb-2 text-white footer-floater'>
            <div className='col justify-content-between text-center floater-div delivery-div'>
              <h3>Delivery</h3>
              <p>(951)-123-4567</p>
              <p>ordercafe@gmail.com</p>
            </div>
            <div className='col justify-content-between text-center floater-div sched-div'>
              <h3>Open Every Day</h3>
              <p>
                Monday-Friday <br></br> 06:00am-11:00pm
              </p>
              <p>
                Saturday-Sunday <br></br> 06:00am-9:00pm
              </p>
            </div>
            <div className='col justify-content-between text-center floater-div'>
              <h3>Stay Connected</h3>
              <a href= 'https://twitter.com/?lang=en'>
              <i class="fab fa-twitter fa-3x"></i>
              </a>
              <a href='https://www.instagram.com/accounts/login/'>
                <i className='fab fa-instagram fa-3x'></i>
              </a>
              <a href='https://www.tiktok.com/'>
                <i className='fab fa-tiktok fa-3x'></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className='border-top border-light border-3'>
        <ul className='nav justify-content-center fixed-bottom footer-bg'>
          <li className='nav-item'>
            <p className='nav-link footer-bottom' href='#'>
              Copyright &copy; 2021
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
