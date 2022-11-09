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
        </div>

    </>
  )
}

export default LandingPage;
