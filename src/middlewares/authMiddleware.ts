import { NextFunction, Request, Response } from "express";
import { isTokenValid } from "../services/authentication";

const protectAdminRoutes = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (token) {
    const isTokenOk = isTokenValid(token);

    if (!isTokenOk) {
      res.status(403).json("Not permitted : wrong token");
    } else {
      next();
    }
  } else {
    res.status(403).json("Not permitted : authorizations are missing");
  }
};

export { protectAdminRoutes };
