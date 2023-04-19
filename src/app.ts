import express from "express";

const app = express();

const defaultPort = 3000;

app.listen(defaultPort, () => {
  console.log(`Serveur lancé sur le port ${defaultPort}`);
});
