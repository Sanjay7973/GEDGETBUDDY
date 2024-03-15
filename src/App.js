import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Product from './Product'
import Contact from './Contact'
import Singleproduct from './Singleproduct'
import Cart from './Cart'
import Header from './components/Header'
import Footer from './Footer'

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/singleproduct/:id' element={<Singleproduct/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='*' element={<Home/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
