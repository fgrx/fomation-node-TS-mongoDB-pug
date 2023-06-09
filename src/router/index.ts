import { Application, Router } from "express";
import { legalController } from "../controllers/legalController";
import { homeController } from "../controllers/homeController";
import { useRouteError } from "../middlewares/routeError";
import { hikeRoutes } from "./hike";
import { adminRoutes } from "./admin";
import { authController } from "../controllers/authController";
import { apiV1 } from "./api/v1";

const createRouter = (app: Application) => {
  const router = Router();

  router.get("/", homeController);
  router.get("/mentions-legales", legalController);
  router.get("/login", authController.showLogin);
  router.post("/login", authController.controlCredentials);
  router.get("/logout", authController.logout);

  app.use(router);

  const hikeRouter = hikeRoutes(router);
  app.use(hikeRouter);

  const adminRouter = adminRoutes(router);
  app.use(adminRouter);

  app.use(apiV1());

  useRouteError(app);
};

export default createRouter;
