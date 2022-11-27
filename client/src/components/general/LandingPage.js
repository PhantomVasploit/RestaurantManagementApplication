import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../customer/Navbar';

const LandingPage = ()=>{
  

  return (
    <>

      <div className='landingPage'>
        <Navbar />
          <section className='home' id='home'>
            <div className='content'>
              <h3> COOX'S RESTAURANT</h3>
              <p>
                "Cooking is all about people. Food maybe the only universal thing that really has the power to
                bring everyone together. No matter what culture, everywhere around the world, people eat together"
                - Guy Fieri
              </p>
              <Link className='btn btn-warning' to='/customer/menu'>Order Now</Link>
            </div>

            <div className='image'>
              <img src={require('../../assets/homeImage.png')} alt='burgerImage' />
            </div>

          </section>
          <section className='steps'>
            <div className='box'>
              <img src={require('../../assets/step1.jpg')} alt="orderImage" />
              <h3 className='lead'>Select your favourite meal</h3>
            </div>

            <div className='box'>
              <img src={require('../../assets/step2.jpg')} alt="orderImage" />
              <h3 className='lead'>Once your meal is ready we'll notify you to pick it up</h3>
            </div>

            <div className='box'>
              <img src={require('../../assets/step3.jpg')} alt="orderImage" />
              <h3 className='lead'>Easy payment Methods</h3>
            </div>

            <div className='box'>
              <img src={require('../../assets/step4.jpg')} alt="orderImage" />
              <h3 className='lead'>Enjoy your meal</h3>
            </div>
          </section>
        </div>

    </>
  )
}

export default LandingPage;
