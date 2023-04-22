import { describe, it, expect } from "vitest";
import request from "supertest";

import express, { Router } from "express";
import dotenv from "dotenv";
import { connectDB } from "../../../../db/dbConnexion";

const initAppForTesting=(route:Router):request.SuperTest<request.Test>=>{
  //Configuration de l'environnement
  dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
  connectDB();

  //Initialisation de l'application
  const app = express();
  app.use(express.json());

  //Initialisation de la route à tester
  app.use(route);

  //Chargement de l'application avec supertest
  const runningApp = request(app);

  return runningApp
}

export {initAppForTesting}

