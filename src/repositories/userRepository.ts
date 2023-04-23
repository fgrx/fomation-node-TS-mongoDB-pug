import { userModel } from "../db/models/userModel";
import { User } from "../interfaces/user";

const userRepository = {
  async findUserByEmail(email: string): Promise<User | false | null> {
    try {
      return await userModel.findOne({ email });
    } catch (error) {
      console.error("erreur : ", error);
      return false;
    }
  },
};

export { userRepository };
