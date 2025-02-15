import Navbar from './components/shared/Navbar';
import './App.css';
import Products from './components/Products';
import  { BrowserRouter  as Router , Routes , Route}  from 'react-router-dom'
import { useState } from "react";
import About from './components/About';
import Home from './components/home/Home';
import Contact from './components/Contact';
import React from 'react';
import { Toaster, toast } from 'react-hot-toast';
import Cart from './components/cart/Cart';
import LogIn from './components/auth/login';
function App() {
  return (
   <React.Fragment>
    <Router>
      <Navbar/>
       <Routes>
         <Route path = '/' element = { <Home/>} />
         <Route path = '/products' element = { <Products/>} />
         <Route path = '/about' element = { <About/>} />
         <Route path = '/contact' element = { <Contact/>} />
         <Route path = '/login' element = { <LogIn/>} />
       </Routes>
    </Router>
    <Toaster position = 'bottom-center' />
    </React.Fragment>
  )
}
export default App;
