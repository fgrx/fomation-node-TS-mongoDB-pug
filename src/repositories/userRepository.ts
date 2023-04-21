import { userModel } from "../db/models/userModel";
import { User } from "../interfaces/user";

const userRepository = {
  async findUserByEmail(email: string): Promise<User | false | null> {
    return await userModel.findOne({ email });
  },
};

export { userRepository };
