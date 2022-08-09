import { combineReducer } from '@reduxjs/toolkit';

import hotBeverageReducer from './hotBeverage/hotBeverage';
import mainCourseMealsReducer from './mainCourse/mainCourse';
import aperitifsAndBittersReducer from './aperitifsAndBitters/aperitifsAndBitters';
import beerReducer from './beer/beer';
import bourbonAndTennesseeReducer from './bourbonAndTennessee/bourbonAndTennessee';
import breakfastBitesReducer from './breakfastBites/breakfastBites';


export default combineReducer({
  hotBeverage: hotBeverageReducer,
  mainCourseMeals: mainCourseMealsReducer,
  aperitifsAndBitters: aperitifsAndBittersReducer,
  beer: beerReducer,
  bourbonAndTennessee: bourbonAndTennesseeReducer,
  breakfastBites: breakfastBitesReducer
})
