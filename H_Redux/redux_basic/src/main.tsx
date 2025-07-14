import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import store from './redux/store.ts'
import { RouterProvider } from 'react-router'
import router from './routes/router.tsx'
import { ThemeProvider } from './providers/theme-provider.tsx'


// redux er sathe react er connection -> store with Provider diye wrap korte hbe
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ThemeProvider>
    
  </StrictMode>,
)
