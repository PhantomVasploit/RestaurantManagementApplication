import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import './App.css';
import LandingPage from './components/general/LandingPage';
import AdminLogin from './components/admin/Login';
import CustomerRegister from './components/customer/Register';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={ <LandingPage /> } />

          <Route path='/admin/login' element={ <AdminLogin /> } />

          <Route path='/customer/register' element={ <CustomerRegister /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
