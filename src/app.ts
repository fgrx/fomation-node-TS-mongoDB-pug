import express from "express";
import createRouter from "./router";
import dotenv from "dotenv";
import { connectDB } from "./db/dbConnexion";
import cookieParser from "cookie-parser";
import sessions from "express-session";

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

//Attention la définition des sessions doit se faire AVANT le router
//Pour configurer et utiliser les sessions sur notre app
const oneDay = 1000 * 60 * 60 * 24;

app.use(
  sessions({
    secret: process.env.SESSION_SECRET || "MaVarSecrete!",
    saveUninitialized: true,
    resave: true,
    cookie: { maxAge: oneDay },
  })
);

// Pour typer les sessions avec TS. Dans la session nous ne gardons que le mail
declare module "express-session" {
  interface SessionData {
    userEmail: string;
  }
}

app.use(cookieParser());

createRouter(app);

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Serveur lancé sur le port ${port} !`);
});
