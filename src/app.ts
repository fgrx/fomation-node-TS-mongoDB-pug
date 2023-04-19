import express from "express";
import createRouter from "./router";
import dotenv from "dotenv";

const app = express();

//Pour indiquer à Express d'utiliser pug
app.set("views", "./src/views");
app.set("view engine", "pug");

//Pour utiliser Bootstrap
app.use("/bootstrap", express.static("./node_modules/bootstrap/dist"));

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

createRouter(app);

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Serveur lancé sur le port ${port} !`);
});
