import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import ProductList from '../../Components/ProductList/ProductList'
import './HomeScreen.css'

const HomeScreen = () => {
  return (
    <div>
        <Navbar/>
        <main>

        <div className='borde'> 
          <h1 className='titulo'>Catalogo de productos</h1>
        </div>


        <ProductList/>
        </main>
    </div>
  )
}

export default HomeScreen