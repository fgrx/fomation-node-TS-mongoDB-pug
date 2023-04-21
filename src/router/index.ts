import { Application, Router } from "express";
import { legalController } from "../controllers/legalController";
import { homeController } from "../controllers/homeController";
import { useRouteError } from "../middlewares/routeError";
import { hikeRoutes } from "./hike";

const createRouter = (app: Application) => {
  const router = Router();

  router.get("/", homeController);
  router.get("/mentions-legales", legalController);
  app.use(router);

  const hikeRouter = hikeRoutes(router);
  app.use(hikeRouter);

  useRouteError(app);
};

export default createRouter;
