import { Router } from "express";
import { hikeManagement } from "../controllers/admin/hikeManagement";

const adminRoutes = (router: Router): Router => {
  router.get("/admin", hikeManagement.displayHikeManagementConsole);
  router.get("/admin/delete/:slug", hikeManagement.hikeDeletion);
  router.get("/admin/valid/:slug", hikeManagement.hikeValidation);

  return router;
};

export { adminRoutes };
