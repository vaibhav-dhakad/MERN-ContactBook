import axios from "axios";

const URL = 'http://localhost:8000';

export const addUser = async(data) =>{
   try {
     await axios.post(`${URL}/add`,data);
    
   } catch (error) {
    console.log("Error while calling add User api",error);
   }
}

export const editUser = async(id ,data) =>{
   try {
     await axios.put(`${URL}/${id}`,data);
    
   } catch (error) {
    console.log("Error while calling add User api",error);
   }
}

export const getUsers = async() =>{
 try {
    return await axios.get(`${URL}/all`);
 } catch (error) {
  console.log("Error while calling get users api",error );
 }
}

export const getUser = async(id)=>{
  try {
    return await axios.get(`${URL}/${id}`);
  } catch (error) {
    console.log("Error while calling getUser api",error);
  }
}

export const deleteUser = async(id) =>{
  try {
    return await axios.delete(`${URL}/${id}`);
  } catch (error) {
    console.log("Error while calling getUser api",error);
  }
}



////////////////////////////////////////////////////////////////

export const signupUser = async(data) =>{
   try {
    return await axios.post(`${URL}/signup`,data);
    
   } catch (error) {
    console.log("Error while calling signupUser api",error);
   }
}


export const loginUser = async(data) =>{
   try {
    return await axios.post(`${URL}/login`,data);
    
   } catch (error) {
    console.log("Error while calling signupUser api",error);
   }
}