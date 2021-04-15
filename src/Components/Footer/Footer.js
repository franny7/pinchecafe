import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer-ref'>
      <div id='footer' className=''>
        <div className='footer-floater'>
          <div className='floater-div delivery-div'>
            <h3>Delivery</h3>
            <p>(951)-123-4567</p>
            <p>ordercafe@gmail.com</p>
          </div>
          <div className='floater-div sched-div'>
            <h3>Open Every Day</h3>
            <p>
              Monday-Friday <br></br> 06:00am-11:00pm
            </p>
            <p>
              Saturday-Sunday <br></br> 06:00am-9:00pm
            </p>
          </div>
          <div id='icons' className='floater-div'>
            <h3>Stay Connected</h3>
            <a href='https://twitter.com/?lang=en'>
              <i className='fab fa-twitter fa-3x'></i>
            </a>
            <a href='https://www.instagram.com/accounts/login/'>
              <i className='fab fa-instagram fa-3x'></i>
            </a>
            <a href='https://www.tiktok.com/'>
              <i className='fab fa-tiktok fa-3x'></i>
            </a>
          </div>
          <div id='res-icons' className='floater-div'>
            <h3>Stay Connected</h3>
            <a href='https://twitter.com/?lang=en'>
              <i className='fab fa-twitter fa-2x'></i>
            </a>
            <a href='https://www.instagram.com/accounts/login/'>
              <i className='fab fa-instagram fa-2x'></i>
            </a>
            <a href='https://www.tiktok.com/'>
              <i className='fab fa-tiktok fa-2x'></i>
            </a>
          </div>
        </div>
      </div>

      <div className='div-border'>
        <div className='footer-bg'>
          <p className='footer-bottom-p'>Copyright &copy; 2021</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
