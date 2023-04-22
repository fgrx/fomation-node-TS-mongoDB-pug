import { describe, it, expect } from "vitest";
import request from "supertest";

import express from "express";
import dotenv from "dotenv";
import { connectDB } from "../../../../db/dbConnexion";
import getHikes from "../hike/getHikes";

//Configuration de l'environnement
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
connectDB();

//Initialisation de l'application
const app = express();
app.use(express.json());

//Initialisation de la route à tester
const routes = getHikes("/api/v1");
app.use(routes);

//Chargement de l'application avec supertest
const runningApp = request(app);

describe("GET api/v1/hikes", () => {
  it("should return a list of hikes", async () => {
    const response = await runningApp.get("/api/v1/hikes");

    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThan(2);
  });
});
