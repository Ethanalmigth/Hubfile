import React from 'react'
import { Navigate } from 'react-router-dom'

export default function AuthProtected({ children }) {
    const token=localStorage.getItem("token")
    if(token){
        console.log(token)
        console.log(children)
        return children
    }
    return <Navigate to="/login" />
}





