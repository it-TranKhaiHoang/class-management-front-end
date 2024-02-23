import { User } from "../models";
import { asyncHandler } from "../middlewares";

const userControllers = {
  createUser: asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      throw new Error("Please fill all inputs");
    }

    const userExists = await User.findOne({ email });
    if (userExists) res.status(400).send("User already exists");
  }),
};

export default userControllers;
