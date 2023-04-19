import { Application, Router } from "express";

const createRouter = (app: Application) => {
  const router = Router();

  router.get("/", (req, res) => {
    res.render("index", { message: "Hello tout le monde !" });
  });

  app.use(router);
};

export default createRouter;
