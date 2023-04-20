import mongoose from "mongoose";

const connectDB = () => {
  mongoose
    .set("strictQuery", false)
    .connect(process.env.DATABASE_URL || "")
    .then(() => console.log("Connecté à la BDD"))
    .catch((error) => console.error("Problème de connexion à la BDD", error));
};

export { connectDB };
