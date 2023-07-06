import User from "../schema/user-schema.js";
import jwt from "jsonwebtoken";
const secretKey = "Hellomynameisprateek321123"
const verify_token = async(token) => {

    const data = await jwt.verify(token, secretKey);

    return data
}
export const addUser = async(req, res) => {

    const { name, username, email, phone } = req.body;

    const token = await req.headers.token
        // console.log(token
    console.log(token, 'line 15')
    const addedById = await verify_token(token);
    console.log(addedById.user.id, 'line 16')
    const newUser = new User({ name, username, email, phone, addedBy: addedById.user.id });
    try {
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const editUser = async(req, res) => {
    const user = req.body;
    const newUser = new User(user);

    try {
        await User.updateOne({ _id: req.params.id }, newUser);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const getUsers = async(req, res) => {
    try {
        console.log("getUSers Envoked")
        const token = await req.headers.token

        // console.log(token
        // console.log(token)
        // console.log(token, 'line 15')
        const addedById = await verify_token(token)
        console.log(addedById.user.id)
        const users = await User.find({ addedBy: addedById.user.id });
        res.status(201).json(users);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


export const getUser = async(req, res) => {
    try {

        const user = await User.findById(req.params.id);
        res.status(201).json(user);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const deleteUser = async(req, res) => {
    try {
        const user = await User.deleteOne({ _id: req.params.id });
        res.status(201).json(user);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


//////////////////////////////////////////////////