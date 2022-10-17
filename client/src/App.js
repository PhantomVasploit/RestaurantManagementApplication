import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


import './App.css';
import LandingPage from './components/general/LandingPage';

import AdminLogin from './components/admin/Login';
import AdminRegister from './components/admin/Register';

import CustomerRegister from './components/customer/Register';
import CustomerLogin from './components/customer/Login';
import Home from './components/customer/Home';
import Menu from './components/customer/menu/Menu';
import Orders from './components/customer/Orders';
import Reservation from './components/customer/Reservation';
import ReservationConfirmation from './components/customer/ReservationConfirmation';

import ChefRegister from './components/chef/Register';
import ChefLogin from './components/chef/Login';

import Error404 from './components/general/Error404';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={ <LandingPage /> } />

          <Route path='/admin/login' element={ <AdminLogin /> } />
          <Route path='/admin/register' element={ <AdminRegister /> } />

          <Route path='/customer/register' element={ <CustomerRegister /> } />
          <Route path='/customer/login' element={ <CustomerLogin /> } />
          <Route path='/customer/home' element={ <Home /> } />
          <Route path='/customer/menu' element={ <Menu /> } />
          <Route path='/customer/orders' element={ <Orders /> } />
          <Route path='/customer/reservation' element={ <Reservation /> } />
          <Route path='/customer/reservation/confirm' element={ <ReservationConfirmation /> } />

          <Route path='/chef/register' element={ <ChefRegister /> } />
          <Route path='/chef/login' element={ <ChefLogin /> } />

          <Route path='*' element={<Error404/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
