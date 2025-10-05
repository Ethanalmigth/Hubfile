import api from "./Api";


export const createFolders=async (data)=>{
    try{
        const response= await api.post(`folders/create_folder`,data)
        console.log("response",response)
        return response.data
    }
    catch(error){
        console.log("error",error)
        return error.response.data
    }
}

export const getFolders=async ()=>{
    try{
        const response= await api.get(`folders/get_folders`)
        console.log("response",response)
        return response.data
    }
    catch(error){
        console.log("error",error)
        return error.response.data
    }
}


export const updateFolders=async (id,data)=>{
    try{
        const response= await api.put(`folders/update_folder/${id}`,data)
        console.log("response",response)
        return response.data
    }
    catch(error){
        console.log("error",error)
        return error.response.data
    }
}