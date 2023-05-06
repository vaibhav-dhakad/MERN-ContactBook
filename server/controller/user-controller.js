import User from "../schema/user-schema.js";


export const addUser = async(req,res)=>{
  const user = req.body;
  const newUser = new User(user);
  
  try {
   await newUser.save();
   res.status(201).json(newUser);
  } catch (error) {
    res.status(409).json({message: error.message});
  }
}

export const editUser = async(req,res)=>{
  const user = req.body;
  const newUser = new User(user);
  
  try {
   await User.updateOne({_id: req.params.id},newUser);
   res.status(201).json(newUser);
  } catch (error) {
    res.status(409).json({message: error.message});
  }
}

export const getUsers = async(req,res)=>{
  try {
   const users = await User.find({});
   res.status(201).json(users);
  } catch (error) {
    res.status(404).json({message: error.message});
  }
}


export const getUser = async(req,res)=>{
    try {
   const user = await User.findById(req.params.id);
   res.status(201).json(user);
  } catch (error) {
    res.status(404).json({message: error.message});
  }
}

export const deleteUser = async(req,res)=>{
    try {
   const user = await User.deleteOne({_id:req.params.id});
   res.status(201).json(user);
  } catch (error) {
    res.status(404).json({message: error.message});
  }
}