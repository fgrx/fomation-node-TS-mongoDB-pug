import { Router } from "express";
import { globSync } from "glob";
import path from "path";

const apiV1 = (): Router => {
  const router = Router();

  const baseUrl = "/api/v1";

  router.get(baseUrl, (req, res) => {
    res.json("Bienvenue ! 🙌");
  });

  //Auto import
  const routerFiles = globSync(`./src/router/api/**/*.ts`, {
    ignore: ["src/router/api/v1/index.ts", "**/*.spec.ts", "**/__tests__/**"],
  });

  routerFiles.map(async (filename) => {
    const routeModule = await import(path.resolve(filename));
    router.use(routeModule.default(baseUrl));
  });

  return router;
};

export { apiV1 };
