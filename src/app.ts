import express from "express";
import createRouter from "./router";
import dotenv from "dotenv";

const app = express();

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

createRouter(app);

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Serveur lancé sur le port ${port} !`);
});
