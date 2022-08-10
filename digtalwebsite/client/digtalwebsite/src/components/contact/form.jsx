import Intro from "./utils/intro"
import cont from '../../assests/images/contact.png'
import {GoAlert} from 'react-icons/go'
import {useState} from 'react'
import Spinner from "./utils/spinner"

function Form(){
    const [contact , setcontact] = useState(contact=>({
        'first_name':'',
        'last_name':'',
        'email':'',
        'subject':'',
        'message':'',
        'phone':'none'
    }))
    const [submit,setSubmit] = useState(submit=>"Send Message")
    const spinner= <Spinner/>
    const [submitable,setSubmitable] = useState(submitable=>false)

    function handleForm(e){
        e.preventDefault();
        // const contactdata = JSON.stringify(contact)
        const getToken = async () => {
            fetch("http://127.0.0.1:8000/api/content/contact/", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                "first_name":contact.first_name, "last_name":contact.last_name, "email":contact.email, "phone_number":contact.phone , "subject":contact.subject , "message":contact.message
            })
            })
            .then(res => res.json())
            .then((data)=>{
                setSubmit('Data sent');
                setSubmitable(true);
            })
            .catch(()=>{
                setSubmit('An error occurred');
                setSubmitable(false);
            })
        };
        getToken();
    }
    function handleSubmit(){
        if ( (/^\w{4,}$/).test(contact.first_name) && (/^\w{4,}$/).test(contact.last_name) && (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(contact.email)){
            setSubmitable(false);
        }
        else{
            setSubmitable(true);
        }
    }
    return (
        <div className="flex flex-row overflow-x-hidden items-center justify-center m-8">
            <div className="flex flex-col items-start  m-4">
                <Intro content="Contact Us" subcontent="Our friendly team would love to hear from you"/>
                <form method="post" onFocus={()=>{handleSubmit()}} onChange={()=>{handleSubmit()}} onSubmit={(e)=>{handleForm(e);setSubmit(spinner)}} className="flex flex-col items-stretch justify-center p-4 my-2 gap-y-4">
                    <fieldset className="flex flex-row justify-between gap-x-2">
                        <div className="input-group flex flex-col">
                            <label htmlFor="first_name" className="text-2xl py-3 px-1">First Name</label>
                            <input pattern="^\w{4,}$" type="text" name="first_name" id="first_name" value={contact.first_name} onChange={(e)=>setcontact({...contact,'first_name':e.target.value})} required placeholder="First Name" className="peer transition font-normal border py-3 px-1 text-2xl focus:ring focus:ring-slate-400 hover:ring hover:ring-slate-200 focus:outline-none rounded-md ease-in-out"/>
                            <p className="text-xl text-red-500 invisible py-3 peer-invalid:visible flex flex-row items-center"><GoAlert className=""/>This field is not optional</p>
                        </div>
                        <div className="input-group flex flex-col">
                            <label htmlFor="last_name" className="text-2xl py-3 px-1">Last Name</label>
                            <input pattern="^\w{4,}$" type="text" name="last_name" id="last_name" value={contact.last_name} onChange={(e)=>setcontact({...contact,'last_name':e.target.value})} required placeholder="Last Name" className="peer transition font-normal border py-3 px-1 text-2xl focus:ring focus:ring-slate-400 hover:ring hover:ring-slate-200 focus:outline-none rounded-md ease-in-out"/>
                            <p className="text-xl text-red-500 invisible py-3 peer-invalid:visible flex flex-row items-center"><GoAlert className=""/>This field is not optional</p>
                        </div>
                    </fieldset>
                    <fieldset className="flex flex-row justify-start ">
                        <div className="flex flex-col w-full">
                            <label htmlFor="email" className="text-2xl py-3 px-1 ">Email Address</label>
                            <input type="email" name="email" id="email" pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$" value={contact.email} onChange={(e)=>{setcontact({...contact,'email':e.target.value})}} required placeholder="example@example.com" className="peer transition font-normal border py-3 px-1 text-2xl focus:ring focus:ring-slate-400 hover:ring hover:ring-slate-200 focus:outline-none w-100 rounded-md ease-in-out"/>
                            <p className="text-xl text-red-500 invisible py-3 peer-invalid:visible flex flex-row items-center"><GoAlert className=""/>This email is not valid</p>
                        </div>
                    </fieldset>
                    <fieldset className="flex flex-row justify-start ">
                        <div className="flex flex-col w-full">
                            <label htmlFor="subject" className="text-2xl py-3 px-1 ">Subject</label>
                            <input  type="text" name="subject" id="subject" value={contact.subject} onChange={(e)=>{setcontact({...contact,'subject':e.target.value})}} required placeholder="Subject" className="peer font-normal border py-3 px-1 text-2xl focus:ring focus:ring-slate-400 hover:ring hover:ring-slate-200 focus:outline-none w-100 rounded-md transition ease-in-out"/>
                            <p className="text-xl text-red-500 invisible py-3 peer-invalid:visible flex flex-row items-center"><GoAlert className=""/>Please fill in this field</p>
                        </div>
                    </fieldset>
                    <fieldset className="flex flex-row justify-start ">
                        <div className="flex flex-col w-full">
                            <label htmlFor="message" className="text-2xl py-3 px-1 ">Enter your message</label>
                            <textarea type="text" name="message" id="message" value={contact.message} onChange={(e)=>{setcontact({...contact,'message':e.target.value})}}  className="peer peer-invalid:border peer-invalid:border-red-500 font-normal border py-3 px-1 text-2xl focus:ring focus:ring-slate-400 hover:ring hover:ring-slate-200 focus:outline-none w-100 rounded-md ease-in-out transition" required/>
                            <p className="text-xl text-red-500 invisible py-3 peer-invalid:visible flex flex-row items-center"><GoAlert className=""/>The message cannot be empty</p>
                        </div>
                    </fieldset>
                    <button  className={"text-2xl bg-gray-700 text-slate-100 p-4 leading-none rounded hover:bg-slate-900  peer-valid:invisible transition ease-in-out"  } disabled={submitable}>
                        {submit} 
                    </button>
                </form>
            </div>
            <img src={cont} alt="" />
        </div>
    )

}

export default Form;