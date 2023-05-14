import UserModel from "../schema/UserModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const maxAge = 3*24*60*60;

const createToken = (id)=>{
   return jwt.sign({id},"Hellomynameisprateek321123",{expiresIn: maxAge});
}

export const signup = async(req,res)=>{

  try {
  const {name,email,password} = req.body;

  //  const token = createToken(user._id);
  //  res.cookie("jwt",token,{ withCredentials: true,httpOnly:false,maxAge:maxAge*1000,});
  //  res.status(201).json({user: user._id,create:true});

   if(!name || !email || !password){
            return res.send({msg: "Fill all option before signup"});
        }

   const oldUser =  await UserModel.findOne({email});
        if(oldUser){
            return res.send({msg: "User Exists"});
        }

     const encrytedPassword = await bcrypt.hash(password,10);
    
        await UserModel.create({name , email, password :encrytedPassword});

        res.status(201).json({msg: "User SuccessFully SignUp"});
        
  } catch (error) {
    res.status(409).json({msg: error.message});
  }
}


////////////////////////////////////////////////////

export const login = async(req,res)=>{
  const {email,password} = req.body;

    try {

        if(!email || !password){
            return res.send({msg: "Fill all option before login"});
        }

        const User =  await UserModel.findOne({email});

        if(!User){
            return res.json({msg: "User Doesn't Found"});
        }

        if(await bcrypt.compare(password,User.password)){
            // const token = jwt.sign({name : User.name,email: User.email},JWT_SECRET);

            if(res.status(201)){
                return res.json({msg: "ok"});
            }else{
                return res.json({msg: "error"});
            }}

        res.json({msg:"Invalid Password"});
  } catch (error) {
    res.status(409).json({message: error.message});
  }
}