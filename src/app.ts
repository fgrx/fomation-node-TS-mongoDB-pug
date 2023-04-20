import express from "express";
import createRouter from "./router";
import dotenv from "dotenv";
import { connectDB } from "./db/dbConnexion";

const app = express();

//Pour indiquer à Express d'utiliser pug
app.set("views", "./src/views");
app.set("view engine", "pug");

//Pour utiliser Bootstrap
app.use("/bootstrap", express.static("./node_modules/bootstrap/dist"));

//Customization de Bootstrap
app.use("/public", express.static("./public"));

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

//Connexion à la BDD
connectDB();

// Indique à express d'utiliser un middleware (bodyparser) pour parser la requete
app.use(express.urlencoded({ extended: true }));

createRouter(app);

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Serveur lancé sur le port ${port} !`);
});
