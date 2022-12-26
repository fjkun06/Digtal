export const sendContactData = async (data) =>{

    const contactPath = process.env.REACT_APP_BACKEND_CONTACT_SUFFIX
    const backendUrl = process.env.REACT_APP_BACKEND_ENDPOINT
    const endpoint = backendUrl+contactPath
    
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