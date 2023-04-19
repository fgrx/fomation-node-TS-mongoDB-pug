import { Application, Router } from "express";
import { legalController } from "../controllers/legalController";
import { homeController } from "../controllers/homeController";

const createRouter = (app: Application) => {
  const router = Router();

  router.get("/", homeController);

  router.get("/mentions-legales", legalController);

  app.use(router);
};

export default createRouter;
