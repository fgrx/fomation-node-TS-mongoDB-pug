import crypto from "crypto";
import jwt, { JwtPayload } from "jsonwebtoken";
import { userRepository } from "../repositories/userRepository";

const verifyCredentials = async (
  email: string,
  password: string
): Promise<boolean> => {
  const userInDB = await userRepository.findUserByEmail(email);
  if (userInDB) {
    const encodedPassword = passwordEncoder(password, userInDB.salt);
    return encodedPassword === userInDB.password;
  }

  return false;
};

const tokenCreator = (datas: any): string => {
  return jwt.sign(datas, process.env.TOKEN_SALT || "defaultToken");
};

const passwordEncoder = (password: string, key: string): string => {
  //HMAC : Hash-based message authentication code,
  // Permet de créer un hash avec une signature numérique
  const hash = crypto.createHmac("sha512", key);

  //Met à jour le hash en y mettant le mot de passe
  hash.update(password);

  //Digest permet d'obtenir le résultat du hash (format hex ou base64)
  return hash.digest("hex");
};

const isTokenValid = (token: string): string | JwtPayload | false => {
  try {
    const tokenDatas = jwt.verify(
      token,
      process.env.TOKEN_SALT || "defaultToken"
    );
    return tokenDatas;
  } catch (error) {
    return false;
  }
};

export { verifyCredentials, passwordEncoder, tokenCreator, isTokenValid };
