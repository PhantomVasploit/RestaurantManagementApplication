import { configureStore } from '@reduxjs/toolkit';

import userReducer from '../features/user/user';
import hotBeverageReducer from '../features/menu/hotBeverage/hotBeverage';
import mainCourseMealsReducer from '../features/menu/mainCourse/mainCourse';
import aperitifsAndBittersReducer from '../features/menu/aperitifsAndBitters/aperitifsAndBitters';
import beerReducer from '../features/menu/beer/beer';
import bourbonAndTennesseeReducer from '../features/menu/bourbonAndTennessee/bourbonAndTennessee';
import breakfastBitesReducer from '../features/menu/breakfastBites/breakfastBites';

export const store = configureStore({
  reducer: {
    user: userReducer,
    hotBeverage: hotBeverageReducer,
    mainCourseMeals: mainCourseMealsReducer,
    aperitifsAndBitters: aperitifsAndBittersReducer,
    beer: beerReducer,
    bourbonAndTennessee: bourbonAndTennesseeReducer,
    breakfastBites: breakfastBitesReducer
  },
});
