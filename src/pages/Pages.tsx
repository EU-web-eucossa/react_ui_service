import React from 'react';
import Home from './Home';
import { Routes, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Cart from './Cart';

function Pages() {
  return (
    
    <Routes>
      <Route path='/'element={<Home/>}/>
      <Route path='/checkout'element={<Checkout/>}/>
      <Route path='/cart'element={<Cart/>}/>
    </Routes>
    
  )
}

export default Pages