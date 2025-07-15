import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice'
import logger from './middlewares/logger';
import { baseApi } from './api/baseApi';



const store = configureStore({
  // faka reducer declare na korle error dicche,,as reducer must ditei hbe
  reducer: {
    counter: counterReducer, 
    [baseApi.reducerPath]: baseApi.reducer, // Add RTK Query reducer here  
  },

  // middlewares
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware).concat(logger)
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;