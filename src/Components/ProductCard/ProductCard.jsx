import React, { useState } from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";
import FakeMercadoPago from "../FakeMp/FakeMercadoPago";

const ProductCard = ({ img, title, final_price, real_price, discount, id }) => {
  const [showModal, setShowModal] = useState(false);



  return (
    <div className="product-card">
      <img className="product-image" src={img} alt={title} />
      <h3 className="product-title">{title}</h3>
      <div>
        <span>{real_price}</span>
        <span className="discount">{discount}% OFF</span>
      </div>
      <span className="product-price">${final_price}</span>

       <button onClick={() => setShowModal(true)}>Comprar</button>

      <Link className="detalles" to={`/product/${id}`}>
        Ver detalle
      </Link>

      {showModal && (
        <FakeMercadoPago
          product={{ title, final_price }}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default ProductCard;
