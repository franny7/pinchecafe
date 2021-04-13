import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className='border-bottom border-light border-1'>
      <div id='about-us' className='border-top border-light border-3'>
        <div className='about-us-bg text-white'>
          <div className='darkener'>
            <div className='about-us-container'>
              <h2 className='p-3' style={{ color: '#baa375' }}>
                About Us
              </h2>
              <p>
                Pinché Café offers a unique coffee house enviroment unlike any
                other coffee shop. We are not only a place to drop in and get
                your morning cup of coffee (although you are more than welcome
                to do that), we are a place where you can sit down and enjoy
                that tailor-made cup of coffee. If you need to work, we have a
                seating area created specifically for you. If you need to rest,
                we have a lounge area in front of a stone fire place that is
                perfect for relaxing your mind and your body.
              </p>

              <h2 className='p-3 one-of-kind-h3' style={{ color: '#baa375' }}>
                One of A Kind
              </h2>
              <p className='res-p'>
                We offer a delicious variety of coffee made by our
                professionally trained baristas. We have everything from classic
                coffee to our house made specialty beverages. All of our sauces
                and syrups are made in-house with all natural ingredients (no
                chemicals or preservatives) ensuring you the highest quality in
                taste and health.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
