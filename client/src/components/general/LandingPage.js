import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from './Navbar';


const LandingPage = ()=>{
  

  return (
    <div className='landingPage'>
      <Navbar />
      <div className='container'>
        <div className='row hero justify-content-center align-items-center'>

          <div className='col-md-5 text-md-start heroTextContent'>
            <h1 className='align-middle'>
              <div>
                <div className='text-light display-3 heroHeading' > COOX'S</div>
              </div>
              <div>
                <div className='text-light display-3 heroHeading'> RESTAURANT</div>
              </div>
            </h1>
            <p className='text-light lead heroText'>
              "Cooking is all about people. Food maybe the only universal thing that really has the power to
              bring everyone together. No matter what culture, everywhere around the world, people eat together"
              - Guy Fieri
            </p>
            <div className='row'>
              <div className='col'>
                <Link to='/' className='rounded-2 btn btn-outline-light'> Explore Menu </Link>
              </div>
              <div className='col'>
                <Link to='/' className='rounded-2 btn btn-outline-light'> Book A Table </Link>
              </div>
            </div>
          </div>

          <div className='col-md-5 d-none d-md-block'>
            <div>
              <img className='img-fluid heroImage mb-5 border border-warning border-2 rounded-end' height='100px' src={require('../../assets/pizza.jpg')} alt='pizza-cover' />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default LandingPage;
