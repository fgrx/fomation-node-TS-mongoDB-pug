import { Router } from "express";

const cluster = (baseUrl: string) => {
  const router = Router();

  router.get(`${baseUrl}/cluster/fast-request`, (req, res) => {
    res.json("Really fast !");
  });

  router.get(`${baseUrl}/cluster/slow-request`, (req, res) => {
    // Simule une opération très longue
    for (let i = 0; i < 5000000000; i++) {}
    res.json("Slow request");
  });

  return router;
};

export default cluster;
