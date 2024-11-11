import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { NextUIProvider } from '@nextui-org/react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RegisterPage from './pages/Register.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <RegisterPage />
  }

])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NextUIProvider>
      <RouterProvider router={router}/>
      {/* <App /> */}
    </NextUIProvider>
  </StrictMode>,
)
