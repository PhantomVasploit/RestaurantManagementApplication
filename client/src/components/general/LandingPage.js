import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const LandingPage = ()=>{
  

  return (
    <div className='landingPage'>
      <section>
        <div className='blurClr'></div>
        <div className='blurClr'></div>  
        <header>
          <NavLink className="navbar-brand logoText fw-bold logo" to="/">
            COOX'S RESTAURANT
          </NavLink>
          <ul className='nav'>
            <li className="nav-item">
              <NavLink className="nav-link active link" aria-current="page" to="/">
                <FontAwesomeIcon icon={ faHome } />
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active link" to="/customer/login">Sign In</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active link" to="/customer/register">Sign Up</NavLink>
            </li>
          </ul>
        </header>
        <div className='content'>
          <div className='contentBox'>
            <h1>COOX'S RESTAURANT</h1>
            <p>
            "Cooking is all about people. Food maybe the only universal thing that really has the power to
              bring everyone together. No matter what culture, everywhere around the world, people eat together"
              - Guy Fieri
            </p>
            <Link to='/customer/menu' className='btn btn-warning' >Order Now</Link>
          </div>
          <div className='imgBox mt-5'>
            <img src={require('../../assets/FloatingBurger.png')} alt="floatingBurger"  />
          </div>
        </div>      
      </section>
    </div>
  )
}

export default LandingPage;
