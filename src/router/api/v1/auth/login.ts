import { Router } from "express";
import {
  verifyCredentials,
  tokenCreator,
} from "../../../../services/authentication";

const login = (baseUrl: string) => {
  const router = Router();

  router.post(`${baseUrl}/auth/login`, async (req, res) => {
    const { email, password } = req.body;

    const areValidCredentials = await verifyCredentials(email, password);

    if (areValidCredentials) {
      const token = tokenCreator({ email });
      const auth = { email, token };
      res.status(200).json(auth);
    } else {
      res.status(401).json({ erreur: "Error" });
    }
  });

  return router;
};

export default login;
