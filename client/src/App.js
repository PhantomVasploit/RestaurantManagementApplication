import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


import './App.css';
import LandingPage from './components/general/LandingPage';
import ErrorPage from './components/general/ErrorPage';

import AdminLogin from './components/admin/Login';
import AdminRegister from './components/admin/Register';
import Dashboard from './components/admin/Dashboard';

import CustomerRegister from './components/customer/Register';
import CustomerLogin from './components/customer/Login';
import Home from './components/customer/Home';
import BreakfastBites from './components/customer/menu/BreakfastBites';
import AperitifsAndBitters from './components/customer/menu/AperitifsAndBitters';
import Beer from './components/customer/menu/Beer';
import BourbonAndTennessee from './components/customer/menu/BourbonAndTennessee';
import Champagne from './components/customer/menu/Champagne';
import Cider from './components/customer/menu/Cider';
import Cognac from './components/customer/menu/Cognac';
import Gin from './components/customer/menu/Gin';
import HotBeverage from './components/customer/menu/HotBeverage';
import Juice from './components/customer/menu/Juice';
import LifeStyle from './components/customer/menu/LifeStyle';
import MainCourse from './components/customer/menu/MainCourse';
import MineralWater from './components/customer/menu/MineralWater';
import PremiumBites from './components/customer/menu/PremiumBites';
import RedWine from './components/customer/menu/RedWine';
import Rum from './components/customer/menu/Rum';
import WhiteWine from './components/customer/menu/WhiteWine';
import Orders from './components/customer/Orders';
import Reservation from './components/customer/Reservation';
import ReservationConfirmation from './components/customer/ReservationConfirmation';
import Payment from './components/customer/Payment';

import ChefRegister from './components/chef/Register';
import ChefLogin from './components/chef/Login';

import Error404 from './components/general/Error404';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={ <LandingPage /> } />
          <Route exact path='/error' element={ <ErrorPage /> } />

          <Route path='/admin/login' element={ <AdminLogin /> } />
          <Route path='/admin/register' element={ <AdminRegister /> } />
          <Route path='/admin/dashboard' element={ <Dashboard /> } />

          <Route path='/customer/register' element={ <CustomerRegister /> } />
          <Route path='/customer/login' element={ <CustomerLogin /> } />
          <Route path='/customer/home' element={ <Home /> } />
          <Route path='/customer/menu/breakfast' element={ <BreakfastBites /> } />
          <Route path='/customer/menu/aperitif' element={ <AperitifsAndBitters /> } />
          <Route path='/customer/menu/beer' element={ <Beer /> } />
          <Route path='/customer/menu/bourbon' element={ <BourbonAndTennessee /> } />
          <Route path='/customer/menu/champagne' element={ <Champagne /> } />
          <Route path='/customer/menu/cider' element={ <Cider /> } />
          <Route path='/customer/menu/cognac' element={ <Cognac /> } />
          <Route path='/customer/menu/gin' element={ <Gin /> } />
          <Route path='/customer/menu/hot-beverage' element={ <HotBeverage /> } />
          <Route path='/customer/menu/juice' element={ <Juice /> } />
          <Route path='/customer/menu/life-style' element={ <LifeStyle /> } />
          <Route path='/customer/menu/main-course' element={ <MainCourse /> } />
          <Route path='/customer/menu/mineral-water' element={ <MineralWater /> } />
          <Route path='/customer/menu/premium-bites' element={ <PremiumBites /> } />
          <Route path='/customer/menu/red-wine' element={ <RedWine /> } />
          <Route path='/customer/menu/rum' element={ <Rum /> } />
          <Route path='/customer/menu/white-wine' element={<WhiteWine />} />
          <Route path='/customer/orders' element={ <Orders /> } />
          <Route path='/customer/reservation' element={ <Reservation /> } />
          <Route path='/customer/reservation/confirm' element={ <ReservationConfirmation /> } />
          <Route path='/customer/payment' element={ <Payment /> } />

          <Route path='/chef/register' element={ <ChefRegister /> } />
          <Route path='/chef/login' element={ <ChefLogin /> } />

          <Route path='*' element={<Error404/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
