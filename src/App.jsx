import Navbar from './components/shared/Navbar';
import './App.css';
import Products from './components/Products';
import  { BrowserRouter  as Router , Routes , Route}  from 'react-router-dom'
import { useState } from "react";

import Home from './components/home/Home';

function App() {
  const [count , setCount ] = useState(0)
  return (
   
    <Router>
      <Navbar/>
       <Routes>
         <Route path = '/' element = { <Home/>} />
         <Route path = '/products' element = { <Products/>} />
       </Routes>
    </Router>
    
  )
}

export default App;
