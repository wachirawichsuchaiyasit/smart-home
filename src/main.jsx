import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { NextUIProvider } from '@nextui-org/react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RegisterPage from './pages/Register.jsx'
import LoginPage from './pages/Login.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <RegisterPage />
  },
  {
    path: "/login",
    element: <LoginPage/>
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
