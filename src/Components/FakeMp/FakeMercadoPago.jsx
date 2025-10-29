import React, { useState, useEffect } from 'react';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import './FakeMercadoPago.css';

const FakeMercadoPago = ({ product, onClose }) => {
  const [preferenceId, setPreferenceId] = useState(null);

  // Inicializar Mercado Pago
  useEffect(() => {
    initMercadoPago('APP_USR-33f90cd1-8895-4268-97e0-366345d25fed', {
      locale: 'es-AR', // Ajusta según tu región
    });
  }, []);

  const handlePay = async () => {
    try {
      const res = await fetch('https://ecommerce-con-react-n727ms7q4-axelalessos-projects.vercel.app/create-preference', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: product.title,
          price: product.final_price, // El backend lo convierte a unit_price
          quantity: 1,
        }),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      if (data.id) {
        setPreferenceId(data.id); // Guarda el ID de la preferencia
      }
    } catch (err) {
      console.error('❌ Error al generar el pago:', err);
      alert('Error al generar el pago ❌');
    }
  };

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

        <button className="mp-button" onClick={handlePay}>
          Pagar con Mercado Pago
        </button>

        {preferenceId && <Wallet initialization={{ preferenceId }} />}

        <button className="mp-cancel" onClick={onClose}>
          Cancelar
        </button>
      </div>
    </div>
  );
};

export default FakeMercadoPago;
