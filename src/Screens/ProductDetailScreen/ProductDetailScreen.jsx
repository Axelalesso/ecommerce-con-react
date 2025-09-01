import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../../services/products'
import Navbar from '../../Components/Navbar/Navbar'
import FakeMercadoPago from '../../Components/FakeMp/FakeMercadoPago'

import './ProductDetailScreen.css'

const ProductDetailScreen = () => {
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const { product_id } = useParams()

  const getProductDetail = async () => {
    setLoading(true)
    const product_detail_response = await getProductById({ product_id })
    if (product_detail_response) {
      setProduct(product_detail_response)
    } else {
      setError('error al buscar producto')
    }
    setLoading(false)
  }

  useEffect(() => {
    getProductDetail()
  }, [])

  let content
  if (loading) {
    content = <h2>Cargando...</h2>
  } else if (!loading && !product) {
    content = <div>No encontrado</div>
  } else {
    content = (
      <div className="product-detail">
        <div className="product-info">
          <h2 className="titulo_detalle">{product.title}</h2>
          <p className="texto">{product.detalle}</p>
          <p className="precio">Precio: ${product.final_price}</p>

          <button
            className="buy-button"
            onClick={() => setShowModal(true)}
          >
            Comprar con Mercado Pago
          </button>
        </div>

        <div className="product-image">
          <img
            className="imagen-detalle"
            src={product.img}
            alt={product.title}
          />
        </div>
      </div>
    )
  }

  return (
    <div>
      <Navbar />
      {content}
      {showModal && (
        <FakeMercadoPago
          product={{ title: product.title, final_price: product.final_price }}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  )
}

export default ProductDetailScreen
