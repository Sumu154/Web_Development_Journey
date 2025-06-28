import { configureStore } from '@reduxjs/toolkit'

import counterReducer from './features/counter/counterSlice'



const store = configureStore({
  // faka reducer declare na korle error dicche,,as reducer must ditei hbe
  reducer: {
    counter: counterReducer,
     
  },
})

export type rootState = ReturnType<typeof store.getState>;
export type appDispatch = typeof store.dispatch;
export default store;