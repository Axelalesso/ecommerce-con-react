import React from "react";
import "./FakeMercadoPago.css"; // lo podés diseñar aparte

const FakeMercadoPago = ({ product, onClose }) => {
  return (
    <div className="mp-overlay">
      <div className="mp-modal">
        <img
          src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.18.9/mercadopago/logo__large.png"
          alt="Mercado Pago"
          className="mp-logo"
        />
        <h2>{product.title}</h2>
        <p className="mp-price">Total: ${product.final_price}</p>
        
        <button
          className="mp-button"
          onClick={() => {
            alert("Pago simulado realizado con éxito ✅");
            onClose();
          }}
        >
          Pagar con Mercado Pago
        </button>

        <button className="mp-cancel" onClick={onClose}>
          Cancelar
        </button>
      </div>
    </div>
  );
};

export default FakeMercadoPago;