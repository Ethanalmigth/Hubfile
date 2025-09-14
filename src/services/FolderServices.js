import Api from "./Api";

export const getFolders=async ()=>{
    const reponses= await Api.get("/folder")
    return reponses.data
}