import { Application, Router } from "express";
import { legalController } from "../controllers/legalController";
import { homeController } from "../controllers/homeController";
import { hikeDetailController } from "../controllers/hikeDetailsController";
import { useRouteError } from "../middlewares/routeError";

const createRouter = (app: Application) => {
  const router = Router();

  router.get("/", homeController);

  router.get("/mentions-legales", legalController);

  router.get("/hike/:slug", hikeDetailController);

  app.use(router);

  useRouteError(app);
};

export default createRouter;
