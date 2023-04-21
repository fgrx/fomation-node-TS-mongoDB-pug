import { Router } from "express";
import { hikeManagement } from "../controllers/admin/hikeManagement";
import { routeGuard } from "../middlewares/routeGuard";

const adminRoutes = (router: Router): Router => {
  router.get("/admin", routeGuard, hikeManagement.displayHikeManagementConsole);
  router.get("/admin/delete/:slug", routeGuard, hikeManagement.hikeDeletion);
  router.get("/admin/valid/:slug", routeGuard, hikeManagement.hikeValidation);

  return router;
};

export { adminRoutes };
