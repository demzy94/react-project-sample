import React from 'react'
import ReactDOM from 'react-dom/client'
import WelcomePage from './pages/WelcomePage'
import './index.css'
import BaseLayout from './layouts/BaseLayout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AboutUs from './pages/AboutUs'
import Blog from './pages/Blog'
import Equipments from './pages/Equipments'
import AuthLayout from './layouts/AuthLayout'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<BaseLayout />}>
          <Route index element={<WelcomePage />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/equipment' element={<Equipments />} />
          <Route path='/blog-articles' element={<Blog />} />
        </Route>

        {/* Authentication routes */}
        <Route element={<AuthLayout />}>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Register />} />
        </Route>

      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
  