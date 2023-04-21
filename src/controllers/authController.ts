import { Request, Response } from "express";
import { passwordEncoder } from "../services/passwordEncode";
import { userRepository } from "../repositories/userRepository";
import { AlertMessage } from "../interfaces/AlertMessage";

const authController = {
  showLogin: (req: Request, res: Response) => {
    res.render("login");
  },

  controlCredentials: async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const userInDB = await userRepository.findUserByEmail(email);

    if (userInDB) {
      const encodedPassword = passwordEncoder(password, userInDB.salt);

      if (encodedPassword === userInDB.password) {
        const session = req.session;
        session.userEmail = email;

        res.redirect("/admin");
      } else {
        const message: AlertMessage = {
          title: "Problème d'authentification",
          description: "Le couple Login / Mot de passe ne correspond pas",
          type: "error",
        };
        res.render("login", { message });
      }
    }
  },
};

export { authController };
