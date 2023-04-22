import { Router } from "express";
import getHikes from "./hike/getHikes";
import addHike from "./hike/addHike";
import searchHikes from "./hike/searchHike";

const apiV1 = (): Router => {
  const router = Router();

  const baseUrl = "/api/v1";

  router.get(baseUrl, (req, res) => {
    res.json("Bienvenue ! 🙌");
  });

  router.use(getHikes(baseUrl));
  router.use(addHike(baseUrl));
  router.use(searchHikes(baseUrl));

  return router;
};

export { apiV1 };
