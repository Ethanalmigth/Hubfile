import api from "./Api";

export  const register= async (data)=>{
    const reponses= await api.post("/user/register",data)
    return reponses.data
}

export const login=async (data)=>{
    const reponses= await api.post("/user/login",data)
    return reponses.data
}