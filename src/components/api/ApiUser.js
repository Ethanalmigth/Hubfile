import api from "./Api";


export const register= async ({data})=>{
try{
    const response= await api.post('/user/register',data)
    console.log("response",response)
    return response.data
}
catch(error){
    console.log("error",error)
    return error.response.data
}

}

export const login= async ({data})=>{
try{
    const response= await api.post('/user/login',data)
    console.log("response",response)
    return response.data
}
catch(error){
    console.log("error",error)
    return error.response.data
}

}
