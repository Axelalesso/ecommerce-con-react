import express from "express";
import cors from "cors";
import { MercadoPagoConfig, Preference } from "mercadopago";

const app = express();
app.use(cors());
app.use(express.json());

// 🔹 Configura tu Access Token de prueba
const client = new MercadoPagoConfig({
  accessToken: "APP_USR-6406642486911375-090807-48ed1f26868df9dc88521f278cea4020-2664632384",
});

// 🔹 Endpoint para crear la preferencia
app.post("/create-preference", async (req, res) => {
  try {
    const { title, price, quantity } = req.body;

    const body = {
      items: [
        {
          title,
          quantity: Number(quantity),
          unit_price: Number(price),
          currency_id: "ARS",
        },
      ],
      // 👇 Campo correcto
      back_urls: {
        success: "https://ecommerce-con-react-one.vercel.app/success",
        failure: "https://ecommerce-con-react-one.vercel.app/failure",
        pending: "https://ecommerce-con-react-one.vercel.app/pending",
      },
      auto_return: "approved",
    };

    const preference = new Preference(client);
    const result = await preference.create({ body });

    console.log("✅ Preferencia creada con ID:", result.id);
    res.json({ id: result.id });
  } catch (error) {
    console.error("❌ Error al crear la preferencia:", error);
    res.status(500).json({
      error: "Error creando preferencia",
      details: error,
    });
  }
});

app.listen(3001, () => {
  console.log("✅ Servidor backend corriendo en http://localhost:3001");
});
