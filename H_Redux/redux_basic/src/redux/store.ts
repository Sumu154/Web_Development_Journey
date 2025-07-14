import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice'
import logger from './middlewares/logger';



const store = configureStore({
  // faka reducer declare na korle error dicche,,as reducer must ditei hbe
  reducer: {
    counter: counterReducer,   
  },

  // middlewares
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;