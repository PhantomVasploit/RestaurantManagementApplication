import { configureStore } from '@reduxjs/toolkit';

import menuReducer from '../features/menu/menu';

export const store = configureStore({
  reducer: {
    menu: menuReducer
  },
});
