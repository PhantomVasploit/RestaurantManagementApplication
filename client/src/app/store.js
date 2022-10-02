import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist'

import adminReducer from '../features/admin/admin';
import customerReducer from '../features/customer/customer';
import chefReducer from '../features/chef/chef';
import errorMessageReducer from '../features/errorMessage/errorMessage';
import hotBeverageReducer from '../features/menu/hotBeverage/hotBeverage';
import mainCourseMealsReducer from '../features/menu/mainCourse/mainCourse';
import aperitifsAndBittersReducer from '../features/menu/aperitifsAndBitters/aperitifsAndBitters';
import beerReducer from '../features/menu/beer/beer';
import bourbonAndTennesseeReducer from '../features/menu/bourbonAndTennessee/bourbonAndTennessee';
import breakfastBitesReducer from '../features/menu/breakfastBites/breakfastBites';
import champagneReducer from '../features/menu/champagne/champagne';
import ciderReducer from '../features/menu/cider/cider';
import cognacReducer from '../features/menu/cognac/cognac';
import ginReducer from '../features/menu/gin/gin';
import juiceReducer from '../features/menu/juice/juice';
import lifeStyleReducer from '../features/menu/lifeStyle/lifeStyle';
import mineralWaterReducer from '../features/menu/mineralWater/mineralWater';
import premiumBitesReducer  from '../features/menu/premiumBites/premiumBites';
import redWineReducer from '../features/menu/redWine/redWine';
import whiteWineReducer from '../features/menu/whiteWine/whiteWine';
import rumReducer from '../features/menu/rum/rum';
import orderReducer from '../features/orders/order';
import ordersReducer from '../features/orders/orders';

const reducers = combineReducers({
    admin: adminReducer,
    customer: customerReducer,
    chef: chefReducer,
    errorMessage: errorMessageReducer,
    hotBeverage: hotBeverageReducer,
    mainCourseMeals: mainCourseMealsReducer,
    aperitifsAndBitters: aperitifsAndBittersReducer,
    beer: beerReducer,
    bourbonAndTennessee: bourbonAndTennesseeReducer,
    breakfastBites: breakfastBitesReducer,
    champagne: champagneReducer,
    cider: ciderReducer,
    cognac: cognacReducer,
    gin: ginReducer,
    juice: juiceReducer,
    lifeStyle: lifeStyleReducer,
    mineralWater: mineralWaterReducer,
    premiumBites: premiumBitesReducer,
    redWine: redWineReducer,
    rum: rumReducer,
    whiteWine: whiteWineReducer,
    order: orderReducer,
    orders: ordersReducer
});

const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer
});
