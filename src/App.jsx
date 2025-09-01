import React, { useState } from 'react'
import {Route, Routes, useLocation} from 'react-router-dom'
import ContactScreen from './Screens/ContactScreen/ContactScreen'
import HomeScreen from './Screens/HomeScreen/HomeScreen'; // ajustá la ruta si es distinta
import ProductDetailScreen from './Screens/ProductDetailScreen/ProductDetailScreen';


function App() {
  console.log(useLocation())
  


  return (
    <div>
    <Routes> 
      <Route path='/' element={<HomeScreen/>}/>
      <Route path={'/Contact'} element={<ContactScreen/>}/>
      <Route
      path='/product/:product_id'
      element={<ProductDetailScreen/>}/>
    </Routes>
    </div>
    
  )
}

export default App
