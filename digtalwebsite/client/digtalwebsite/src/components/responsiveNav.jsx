import {ImCross} from 'react-icons/im'
import {FiChevronDown} from 'react-icons/fi'
import anglais from '../assets/images/anglais.png'
import france from '../assets/images/france.png'
import german from '../assets/images/german.png'
import {useState} from 'react'

export default function ResponsiveNav(){

    const [service,setService] = useState((service)=>"none")
    const [serviceState , setServiceState] = useState((serviceState)=>'close')
    const [language,setLanguage] = useState((language)=>"none")
    const [languageState , setLanguageState] = useState((serviceState)=>'close')

    function handleLanguage(){

            if (languageState === "close"){
                setLanguage('');
                setLanguageState('');
            }
            else{
                setLanguage('none');
                setLanguageState('close');
            }


    }

    function handleService(){

        if (serviceState === 'close'){
            setService('');
            setServiceState('');
        }
        else{
            setService('none');
            setServiceState('close');
        }

    }


    return (
        <>
                <div className='w-full  h-auto'>
                    <div className="inner-nav  my-4 flex flex-col  border-b-2 border-bottom-slate-200  divide-slate-200 divide-y">
                        <div className="px-24 cursor-pointer text-slate-500 hover:text-white focus:bg-purple-400 hover:bg-purple-400  inner-nav-element w-full flex flex-row justify-between items-center p-4 transition transition-colors ease-in-out">
                            <a href="/#" className="text-4xl my-4">
                                Home
                            </a>
                        </div>
                        <div className="px-24 cursor-pointer text-slate-500 hover:text-white focus:bg-purple-400 hover:bg-purple-400  inner-nav-element w-full flex flex-row justify-between items-center p-4 transition transition-colors ease-in-out">
                            <a href="/#" className="text-4xl my-4">
                                Entreprise
                            </a>
                        </div>
                        <div className="px-24 cursor-pointer text-slate-500 hover:text-white focus:bg-purple-400 hover:bg-purple-400  inner-nav-element w-full flex flex-row justify-between items-center p-4  transition-colors ease-in-out" onClick={()=>{handleService()}}>
                            <a href="/#" className="text-4xl my-4">
                                Services
                            </a>
                            <FiChevronDown className='text-4xl text-slate-500'/>
                        </div>
                        {/* contenu d'un element service*/}
                        <div className={"inner-content divide-y divide-slate-100 " + service} >
                            <div className="px-32 cursor-pointer text-slate-500 hover:text-white focus:bg-purple-400 hover:bg-purple-400  inner-nav-element w-full flex flex-row justify-between items-center p-4 transition transition-colors ease-in-out">
                                <a href="/#" className="text-4xl my-4">
                                    Consulting
                                </a>
                            </div>
                            <div className="px-32 cursor-pointer text-slate-500 hover:text-white focus:bg-purple-400 hover:bg-purple-400  inner-nav-element w-full flex flex-row justify-between items-center p-4 transition transition-colors ease-in-out">
                                <a href="/#" className="text-4xl my-4">
                                    Web development
                                </a>
                            </div>
                            <div className="px-32 cursor-pointer text-slate-500 hover:text-white focus:bg-purple-400 hover:bg-purple-400  inner-nav-element w-full flex flex-row justify-between items-center p-4 transition transition-colors ease-in-out">
                                <a href="/#" className="text-4xl my-4">
                                    Mobile development
                                </a>
                            </div>
                        </div>
                        {/* fin du contenu d'un element service*/}
                        <div className="cursor-pointer hover:bg-purple-400 hover:text-white text-slate-500 transition-colors ease-in-out px-24 inner-nav-element w-full flex flex-row justify-between items-center p-4">
                            <a href="/#" className="text-4xl my-4">
                                Contact
                            </a>
                        </div>
                        <div className="px-24 cursor-pointer text-slate-500 hover:text-white focus:bg-purple-400 hover:bg-purple-400  inner-nav-element w-full flex flex-row justify-between items-center p-4 transition-colors ease-in-out" onClick={()=>{handleLanguage()}}>
                            <a href="/#" className="my-4 text-4xl  ">
                                Languages
                            </a>
                            <FiChevronDown className='text-4xl text-slate-500'/>
                        </div>
                        {/* contenu d'un element language*/}
                        <div className={"inner-content divide-y divide-slate-100 "+language}>
                            <div className="px-32 cursor-pointer text-slate-500 hover:text-white focus:bg-purple-400 hover:bg-purple-400  inner-nav-element w-full flex flex-row justify-between items-center p-4 transition transition-colors ease-in-out">
                                <a href="/#" className="text-4xl my-4">
                                    English
                                </a>
                                <img src={anglais} alt="france-flag" className="h-12 w-12 object-contain" />
                            </div>
                            <div className="px-32 cursor-pointer text-slate-500 hover:text-white focus:bg-purple-400 hover:bg-purple-400  inner-nav-element w-full flex flex-row justify-between items-center p-4 transition transition-colors ease-in-out">
                                <a href="/#" className="text-4xl my-4">
                                    French
                                </a>
                                <img src={france} alt="france-flag" className="h-12 w-12 object-contain" />
                            </div>
                            <div className="px-32 cursor-pointer text-slate-500 hover:text-white focus:bg-purple-400 hover:bg-purple-400  inner-nav-element w-full flex flex-row justify-between items-center p-4 transition transition-colors ease-in-out">
                                <a href="/#" className="text-4xl my-4">
                                    German
                                </a>
                                <img src={german} alt="france-flag" className="h-12 w-12 object-contain" />
                            </div>
                        </div>
                        {/* fin contenu d'un element language*/}
                    </div>
                </div>
        </>

    )


}