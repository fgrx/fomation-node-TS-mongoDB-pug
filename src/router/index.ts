import { Application, Router } from "express";
import { legalController } from "../controllers/legalController";

const createRouter = (app: Application) => {
  const router = Router();

  router.get("/", (req, res) => {
    res.render("index", { message: "Hello tout le monde !" });
  });

  router.get("/mentions-legales", legalController);

  app.use(router);
};

export default createRouter;
