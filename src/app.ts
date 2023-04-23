import express from "express";
import createRouter from "./router";
import dotenv from "dotenv";
import { connectDB } from "./db/dbConnexion";
import cookieParser from "cookie-parser";
import sessions from "express-session";
import helmet from "helmet";
import cluster from "node:cluster";
import os from "node:os";

const app = express();

//Autorise les flux json au niveau d'express
app.use(express.json());

//Ajout d'une couche de sécurité
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        ...helmet.contentSecurityPolicy.getDefaultDirectives(),
        "img-src": ["'self'", "images.unsplash.com"],
      },
    },
  })
);

//Pour assainir les données envoyées
app.use(require("sanitize").middleware);

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

if (cluster.isPrimary) {
  console.log(`Le processus maitre ${process.pid} est en cours d'execution`);

  const totalCPUs = os.cpus().length;

  // On ne peut pas faire plus de cluster que le nombre max de CPU
  for (let i = 0; i < totalCPUs; i++) {
    cluster.fork();
  }
} else {
  if (process.env.NODE_ENV !== "test") {
    app.listen(port, () => {
      console.log(`Serveur lancé sur le port ${port} !`);
    });
  }
}
