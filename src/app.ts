import express from "express";
import createRouter from "./router";

const app = express();

createRouter(app);

const defaultPort = 3000;

app.listen(defaultPort, () => {
  console.log(`Serveur lancé sur le port ${defaultPort}`);
});
