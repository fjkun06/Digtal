import Intro from "./utils/intro"
import cont from '../../assests/images/contact.png'
import {GoAlert} from 'react-icons/go'


function Form({contact,setcontact}){
    function handleForm(e){
        e.preventDefault();
        // const contactdata = JSON.stringify(contact)
        const getToken = async () => {
            const response = await fetch("http://127.0.0.1:8000/api/content/contact/", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                "first_name":contact.first_name, "last_name":contact.last_name, "email":contact.email, "phone_number":contact.phone , "subject":contact.subject , "message":contact.message
            })
            });
            const data = await response.json();
            console.log(data)
        };
        getToken();
    }
    return (
        <div className="flex flex-row overflow-x-hidden items-center justify-center m-8">
            <div className="flex flex-col items-start  m-4">
                <Intro content="Contact Us" subcontent="Our friendly team would love to hear from you"/>
                <form method="post" onSubmit={(e)=>{handleForm(e)}} className="flex flex-col items-stretch justify-center p-4 my-2 gap-y-4">
                    <fieldset className="flex flex-row justify-between gap-x-2">
                        <div className="input-group flex flex-col">
                            <label htmlFor="first_name" className="text-2xl py-3 px-1">First Name</label>
                            <input type="text" name="first_name" id="first_name" value={contact.first_name} onChange={(e)=>setcontact({...contact,'first_name':e.target.value})} required placeholder="First Name" className="peer transition font-normal border py-3 px-1 text-2xl focus:ring focus:ring-slate-400 hover:ring hover:ring-slate-200 focus:outline-none rounded-md ease-in-out"/>
                        </div>
                        <div className="input-group flex flex-col">
                            <label htmlFor="last_name" className="text-2xl py-3 px-1">Last Name</label>
                            <input type="text" name="last_name" id="last_name" value={contact.last_name} onChange={(e)=>setcontact({...contact,'last_name':e.target.value})} required placeholder="Last Name" className="peer transition font-normal border py-3 px-1 text-2xl focus:ring focus:ring-slate-400 hover:ring hover:ring-slate-200 focus:outline-none rounded-md ease-in-out"/>
                        </div>
                    </fieldset>
                    <fieldset className="flex flex-row justify-start ">
                        <div className="flex flex-col w-full">
                            <label htmlFor="email" className="text-2xl py-3 px-1 ">Email Address</label>
                            <input type="email" name="email" id="email" value={contact.email} onChange={(e)=>{setcontact({...contact,'email':e.target.value})}} required placeholder="Email Address" className="peer transition font-normal border py-3 px-1 text-2xl focus:ring focus:ring-slate-400 hover:ring hover:ring-slate-200 focus:outline-none w-100 rounded-md ease-in-out"/>
                        </div>
                    </fieldset>
                    <fieldset className="flex flex-row justify-start ">
                        <div className="flex flex-col w-full">
                            <label htmlFor="subject" className="text-2xl py-3 px-1 ">Subject</label>
                            <input type="text" name="subject" id="subject" value={contact.subject} onChange={(e)=>{setcontact({...contact,'subject':e.target.value})}} required placeholder="Subject" className="peer font-normal border py-3 px-1 text-2xl focus:ring focus:ring-slate-400 hover:ring hover:ring-slate-200 focus:outline-none w-100 rounded-md transition ease-in-out"/>
                        </div>
                    </fieldset>
                    <fieldset className="flex flex-row justify-start ">
                        <div className="flex flex-col w-full">
                            <label htmlFor="subject" className="text-2xl py-3 px-1 ">Enter your message</label>
                            <textarea type="text" name="subject" id="subject" value={contact.message} onChange={(e)=>{setcontact({...contact,'message':e.target.value})}}  className="peer peer-invalid:border peer-invalid:border-red-500 font-normal border py-3 px-1 text-2xl focus:ring focus:ring-slate-400 hover:ring hover:ring-slate-200 focus:outline-none w-100 rounded-md ease-in-out transition" required/>
                            <p className="text-xl text-red-500 invisible peer-invalid:visible flex flex-row items-center"><GoAlert className=""/>The input is not correct</p>
                        </div>
                    </fieldset>
                    <button className="text-2xl bg-gray-500 text-slate-100 p-4 leading-none rounded hover:bg-slate-900  peer-valid:invisible transition ease-in-out">Send Message</button>
                </form>
            </div>
            <img src={cont} alt="" />
        </div>
    )

}

export default Form;