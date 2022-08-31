import React from 'react';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { NavLink } from 'react-router-dom';
const Navbar = ()=>{
  return(

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
     <div className="container">
       <NavLink className="navbar-brand logoText fw-bold" to="/">
         COOX'S RESTAURANT
       </NavLink>
       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span>
       </button>
       <div className="collapse navbar-collapse" id="navbarSupportedContent">
         <ul className="navbar-nav ms-auto mb-2 mb-lg-">
           <li className="nav-item">
             <NavLink className="nav-link active" aria-current="page" to="/">
               <FontAwesomeIcon icon={ faHome } />
             </NavLink>
           </li>
           <li className="nav-item">
             <NavLink className="nav-link active" to="/">Sign In</NavLink>
           </li>
           <li className="nav-item">
             <NavLink className="nav-link active" to="/">Sign Up</NavLink>
           </li>
         </ul>
       </div>
     </div>
     </nav>

  )
}

export default Navbar;
