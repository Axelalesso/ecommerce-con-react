const functions = require("firebase-functions");
const mercadopago = require("mercadopago");
const cors = require("cors")({ origin: true });

// Configurá tu token
mercadopago.configure({
  access_token: "APP_USR-5943436162182811-090108-28e935e1c499b1247d389108be526969-345982496", // poné tu access token de prueba
});

exports.createPreference = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    try {
      const { title, price, quantity } = req.body;

      const preference = {
        items: [
          {
            title: title,
            unit_price: Number(price),
            quantity: Number(quantity),
          },
        ],
        back_urls: {
          success: "https://https://ecommerce-con-react-one.vercel.app/success",
          failure: "https://https://ecommerce-con-react-one.vercel.app/failure",
          pending: "https://https://ecommerce-con-react-one.vercel.app/pending",
        },
        auto_return: "approved",
      };

      const response = await mercadopago.preferences.create(preference);
      res.status(200).send({ id: response.body.id });
    } catch (error) {
      console.error(error);
      res.status(500).send({ error: "Error creando la preferencia" });
    }
  });
});

