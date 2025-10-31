import React, { useEffect, useState } from "react";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import "./FakeMercadoPago.css";

const FakeMercadoPago = ({ product, onClose }) => {
  const [preferenceId, setPreferenceId] = useState(null);

  useEffect(() => {
    initMercadoPago("APP_USR-33f90cd1-8897-41d3-bbdf-90b7be104e3a");

    document.body.classList.add("modal-open");
    return () => document.body.classList.remove("modal-open");
  }, []);

  useEffect(() => {
    const createPreference = async () => {
      try {
        const res = await fetch("https://tu-api.vercel.app/api/create_preference", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title: product.title,
            price: product.price,
          }),
        });
        const data = await res.json();
        setPreferenceId(data.id);
      } catch (error) {
        console.error("❌ Error al generar la preferencia:", error);
      }
    };
    createPreference();
  }, [product]);

  return (
    <div className="mp-overlay">
      <div className="mp-modal">
        <img
          src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.22.7/mercadopago/logo__large.png"
          alt="Mercado Pago"
          className="mp-logo"
        />
        <h3 className="mp-title">{product.title}</h3>
        <p className="mp-price">Total: ${product.price}</p>

        {/* Solo renderiza el botón oficial */}
        {preferenceId && (
          <div className="mp-wallet">
            <Wallet initialization={{ preferenceId }} />
          </div>
        )}

        <button className="mp-cancel" onClick={onClose}>
          Cancelar
        </button>
      </div>
    </div>
  );
};

export default FakeMercadoPago;
