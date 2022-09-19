import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import './App.css';
import LandingPage from './components/general/LandingPage';

import AdminLogin from './components/admin/Login';
import AdminRegister from './components/admin/Register';

import CustomerRegister from './components/customer/Register';
import CustomerLogin from './components/customer/Login';

import ChefRegister from './components/chef/Register';
import ChefLogin from './components/chef/Login';

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

          <Route path='/chef/register' element={ <ChefRegister /> } />
          <Route path='/chef/login' element={ <ChefLogin /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
