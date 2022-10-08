import React from 'react';
import { faCartShopping, faHome, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink, Link } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';

import { logout } from '../../features/customer/customer';

const Navbar = ()=>{
    const customer = useSelector((state)=>state.customer)
    const orders = useSelector((state)=>state.orders.orders)
    const dispatch = useDispatch()
  return(
    <>
        {
            !customer.email
            ?
                <nav className="navbar navbar-expand-lg navbar-dark shadow-5-strong">
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
                                <NavLink className="nav-link active" to="/customer/login">Sign In</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" to="/customer/register">Sign Up</NavLink>
                            </li>
                            </ul>
                        </div>
                    </div>
                </nav>
       
            :
                <nav className="navbar navbar-expand-lg navbar-dark shadow-5-strong">
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
                                <NavLink className="nav-link active" aria-current="page" to="/customer/home">
                                    <FontAwesomeIcon icon={ faHome } />
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                {
                                    orders.length <= 0
                                    ?
                                        <NavLink className="nav-link active" to="/customer/orders">
                                            <FontAwesomeIcon icon={faCartShopping} />
                                        </NavLink>
                                    :
                                        <NavLink className="nav-link active position-relative" to="/customer/orders">
                                            <FontAwesomeIcon icon={faCartShopping} />
                                            <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>
                                                {orders.length}
                                            </span>
                                        </NavLink>
                                }
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to='/' 
                                onClick={ ()=>{
                                        dispatch(logout())
                                        } }>
                                    <FontAwesomeIcon icon={faSignOut} />
                                </Link>
                            </li>
                            </ul>
                        </div>
                    </div>
                </nav>

        }
    </>
  )
}

export default Navbar;
