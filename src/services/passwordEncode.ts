import crypto from "crypto";

const passwordEncoder = (password: string, key: string): string => {
  //HMAC : Hash-based message authentication code,
  // Permet de créer un hash avec une signature numérique
  const hash = crypto.createHmac("sha512", key);

  //Met à jour le hash en y mettant le mot de passe
  hash.update(password);

  //Digest permet d'obtenir le résultat du hash (format hex ou base64)
  return hash.digest("hex");
};

export { passwordEncoder };
