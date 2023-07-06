import axios from "axios";

const URL = 'http://localhost:8000';
// const token = localStorage.getItem("token");
export const addUser = async(data, token) => {
    // console.log(token
    try {
        console.log(token)
        return await axios.post(`${URL}/add`, data, {
            headers: {
                token: token
            }
        });

    } catch (error) {
        console.log("Error while calling add User api", error);
    }
}

export const editUser = async(id, data) => {
    try {
        await axios.put(`${URL}/${id}`, data);

    } catch (error) {
        console.log("Error while calling add User api", error);
    }
}

export const getUsers = async(token) => {
    try {
        return await axios.get(`${URL}/all`, {
            headers: {
                token: token
            }
        });
    } catch (error) {
        console.log("Error while calling get users api", error);
    }
}

export const getUser = async(id) => {
    try {
        const get = await axios.get(`${URL}/${id}`);
        console.log(get)
        return get
    } catch (error) {
        console.log("Error while calling getUser api", error);
    }
}

export const deleteUser = async(id) => {
    try {
        return await axios.delete(`${URL}/${id}`);
    } catch (error) {
        console.log("Error while calling getUser api", error);
    }
}



////////////////////////////////////////////////////////////////

export const signupUser = async(data) => {
    try {
        return await axios.post(`${URL}/signup`, data);

    } catch (error) {
        console.log("Error while calling signupUser api", error);
    }
}


export const loginUser = async(data) => {
    try {

        return await axios.post(`${URL}/login`, data);

    } catch (error) {
        console.log("Error while calling signupUser api", error);
        return error
    }
}