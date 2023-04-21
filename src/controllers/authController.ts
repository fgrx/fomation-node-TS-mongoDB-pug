import { Request, Response } from "express";
import { passwordEncoder } from "../services/passwordEncode";

const authController = {
  showLogin: (req: Request, res: Response) => {
    res.render("login");
  },

  controlCredentials: (req: Request, res: Response) => {
    const { email, password } = req.body;

    //Test de crypto pour obtenir un mot de passe
    const encodedPassword = passwordEncoder(
      password,
      "NBFR658diBVFIf4d7fIUFOifjfi"
    );
    console.log(encodedPassword);

    res.redirect("/admin");
  },
};

export { authController };
