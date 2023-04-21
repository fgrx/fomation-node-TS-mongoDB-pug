import { Router } from "express";
import {
  hikeAddController,
  hikeSearchController,
  hikesController,
  hikeDetailController,
} from "../controllers/hike/index";
import upload from "../middlewares/upload";

const hikeRoutes = (router: Router): Router => {
  router.get("/hikes/add", hikeAddController.displayForm);
  router.post(
    "/hikes/add",
    upload.single("image"),
    hikeAddController.validateForm
  );

  router.get("/hike/:slug", hikeDetailController);
  router.post("/search", hikeSearchController);
  router.get("/hikes", hikesController);
  router.get("/hikes/:page", hikesController);

  return router;
};

export { hikeRoutes };
