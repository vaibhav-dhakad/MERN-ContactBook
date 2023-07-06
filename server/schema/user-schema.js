import mongoose from "mongoose";
import AuthUserModel from "./authuser-schema.js";
const userSchema = mongoose.Schema({
    name: String,
    username: String,
    email: String,
    phone: String,
    addedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: AuthUserModel
    }

});

const User = mongoose.model("User", userSchema);

export default User;