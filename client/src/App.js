import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import './App.css';
import LandingPage from './components/general/LandingPage';

import AdminLogin from './components/admin/Login';
import AdminRegister from './components/admin/Register';

import CustomerRegister from './components/customer/Register';
import CustomerLogin from './components/customer/Login';

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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
