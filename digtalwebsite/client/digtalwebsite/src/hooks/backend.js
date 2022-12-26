/* eslint-disable no-unused-vars */
import { createContext , useState} from "react";

export const BackendContext = createContext();


export default function BackendProvider({children}){

    const contactPath = process.env.REACT_APP_BACKEND_CONTACT_SUFFIX
    const backendUrl = process.env.REACT_APP_BACKEND_ENDPOINT
    const endpoint = backendUrl+contactPath

    const sendData = async (data) =>{
        fetch(endpoint,{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify(data)
        })
        .then(response=>response.json())
        .then(data=>console.log(data))
    }

    return (
        <BackendContext.Provider value={{sendData}}>
            {children}
        </BackendContext.Provider>
    )


}