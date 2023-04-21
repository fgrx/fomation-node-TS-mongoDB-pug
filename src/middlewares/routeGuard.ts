import { NextFunction, Response, Request } from "express";

const routeGuard = (req: Request, res: Response, next: NextFunction) => {
  const session = req.session;

  if (!session || !session.userEmail) {
    res.redirect("/login");
  } else {
    next();
  }
};

export { routeGuard };
