import { Router } from "express";
import getHikes from "./hike/getHikes";

const apiV1 = (): Router => {
  const router = Router();

  const baseUrl = "/api/v1";

  router.get(baseUrl, (req, res) => {
    res.json("Bienvenue ! 🙌");
  });

  router.use(getHikes(baseUrl));

  return router;
};

export { apiV1 };
