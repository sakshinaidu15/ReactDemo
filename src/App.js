import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Register from './pages/Register'
import Header from './components/Header'
import SingleProduct from './pages/SingleProduct'
import Error from './pages/Error'
import Cart from './pages/Cart'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/product' element={<Product />}></Route>
          <Route path='/product/:id' element={<SingleProduct />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='*' element={<Error />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
