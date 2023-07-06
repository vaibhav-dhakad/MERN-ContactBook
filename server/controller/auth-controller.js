import AuthUserModel from "../schema/authuser-schema.js";
import bcrypt from "bcryptjs";
import jwt, { verify } from "jsonwebtoken";
const secretKey = "Hellomynameisprateek321123"
const createToken = (id) => {
    return jwt.sign(id, secretKey, { expiresIn: "3d" });
};

//////////////////////////////////////////////////////////

export const signup = async(req, res) => {
    try {
        console.log('I am envocked')
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
        const data = { user: { id: user._id } }
        const token = createToken(data);

        res.status(200).json({ msg: "User SuccessFully SignUp", email, token });
    } catch (error) {
        res.status(400).json({ msg: "Nope" });
    }
};

////////////////////////////////////////////////////

export const login = async(req, res) => {
    try {
        const { email, password } = req.body;
        console.log("Login envocked", email)
        if (!email || !password) {
            console.log('if1')
            return res.send({ msg: "Fill all option before login" });
        }

        const User = await AuthUserModel.findOne({ email });

        if (!User) {
            console.log("User not found")
            return res.send({ msg: "User Doesn't Found" });
        }

        if (await bcrypt.compare(password, User.password)) {
            console.log(User._id, "line 60")
            const data = { user: { id: User._id } }
            const token = createToken(data);
            // const id = jwt.verify("token", secretKey)
            // console.log(id)
            // console.log(token)
            // console.log("ok here")
            res.status(200).json({ msg: "User SuccessFully SignUp", email: email, token: token });
        } else {
            res.send({ msg: "Invalid Password" });
        }
    } catch (error) {
        res.status(400).json({ msg: error.message });

    }
};