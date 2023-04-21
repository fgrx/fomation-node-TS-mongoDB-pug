import { Request, Response } from "express";

const authController = {
  showLogin: (req: Request, res: Response) => {
    res.render("login");
  },
};

export { authController };
