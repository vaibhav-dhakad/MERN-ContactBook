import mongoose from "mongoose";

const user = mongoose.Schema({
  name: { type: String, require: true },
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true },
});

// static method signup
// user.static.signup = async(email,password)=>{
//     const exists = await this.findOne({email});
//     if(exists){
//       throw.Error("")
//     }
// }
const AuthUserModel = mongoose.model("AuthUserModel", user);

export default AuthUserModel;
