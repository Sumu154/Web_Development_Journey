import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import store from './redux/store.ts'


// redux er sathe react er connection -> store with Provider diye wrap korte hbe
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
       <App />
    </Provider>
  </StrictMode>,
)
