import AuthUserModel from "../schema/authuser-schema.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const createToken = (id) => {
  return jwt.sign({ id }, "Hellomynameisprateek321123", { expiresIn: "3d" });
};

//////////////////////////////////////////////////////////

export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.send({ msg: "Fill all option before signup" });
    }

    const oldUser = await AuthUserModel.findOne({ email });
    if (oldUser) {
      return res.send({ msg: "User Exists" });
    }

    const encrytedPassword = await bcrypt.hash(password, 10);

    const user = await AuthUserModel.create({
      name,
      email,
      password: encrytedPassword,
    });

    const token = createToken(user._id);

    res.status(200).json({ msg: "User SuccessFully SignUp", email, token });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

////////////////////////////////////////////////////

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.send({ msg: "Fill all option before login" });
    }

    const User = await AuthUserModel.findOne({ email });

    if (!User) {
      return res.send({ msg: "User Doesn't Found" });
    }

    if (await bcrypt.compare(password, User.password)) {
      const token = createToken(User._id);

      res.status(200).json({ email, token });
    } else {
      res.send({ msg: "Invalid Password" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
