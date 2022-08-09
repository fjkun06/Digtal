import Header from "../components/contact/header"
import Footer from "../components/contact/footer"
import Form from "../components/contact/form"
import { useState } from "react"

export default function Contact(){

    const [contactFormData , setContactFormData] = useState(contactFormData=>({
        'first_name':'',
        'last_name':'',
        'email':'',
        'subject':'',
        'message':'',
        'phone':'none'
    }))

    return(
        <>
            <Header />
            <Form contact={contactFormData} setcontact={setContactFormData} />
            <Footer />  
        </>
    )

}