import React from 'react';
import LeftImage from './../hero-right.jpg';

const Home = () => {
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='hero-left col-md-6'>
            <h2>Welcome to <span className='hero-logo'>Tejveer Bank</span></h2>
            <p>Feel free to adjust the wording or styling based on your specific needs or branding guidelines. This banner text is designed to be clear and enticing, highlighting the benefit of opening a bank account with the promise of a $200 CAD bonus upon joining.</p>
            <button className="hero-button cbtn btn-primary">Open Account With Us</button>
          </div>
          <div className='hero-right col-md-6'>
            <img src={LeftImage} className="img-fluid" alt="Hero" />
            </div>
        </div>
        <BodyArea />
      </div>
    </div>
  );
};

const BodyArea = () => {
  return (
    <div className='row'>
      <div className='body-content col-md-4'>
        <h3>Chequing Account</h3>
        <p>Manage your day-to-day finances with ease. Access your funds anytime, anywhere with our chequing accounts.</p>
      </div>
      <div className='body-content col-md-4'>
        <h3>Savings Account</h3>
        <p>Grow your savings with competitive interest rates. Save for your future goals with our flexible savings accounts.</p>
      </div>
      <div className='body-content col-md-4'>
        <h3>Business Account</h3>
        <p>Streamline your business operations. Enjoy tailored financial solutions and dedicated support for your business needs.</p>
      </div>
    </div>
  );
};

export default Home;
