import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import HomeIcon from '@material-ui/icons/Home';
import CartIcon from '@material-ui/icons/ShoppingBasket';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

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
                <nav className="navbar navbar-expand-lg shadow-5-strong">
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
                                <HomeIcon />
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
                <nav className="navbar navbar-expand-lg  shadow-5-strong">
                    <div className="container">
                        <NavLink className="navbar-brand logoText fw-bold" to="/customer/home">
                            COOX'S RESTAURANT
                        </NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/customer/home">
                                    <HomeIcon />
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                {
                                    orders.length <= 0
                                    ?
                                        <NavLink className="nav-link active" to="/customer/orders">
                                            <CartIcon />
                                        </NavLink>
                                    :
                                        <NavLink className="nav-link active position-relative" to="/customer/orders">
                                            <CartIcon />
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
                                    <ExitToAppIcon/>
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
