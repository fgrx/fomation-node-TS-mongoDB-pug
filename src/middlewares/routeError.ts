import { Application } from "express";

const useRouteError = (app: Application) => {
  const title = "Erreur 404";
  const content = "La page demandée n'existe pas";

  app.use((req, res, next) => {
    res.status(404).render("page", { title, content });
  });
};

export { useRouteError };
