import {IoMdFingerPrint as Finger } from 'react-icons/io'
import { AiFillCaretDown } from 'react-icons/ai'
import Logo from './logo.png'
import {ImCross} from 'react-icons/im'
import { GiHamburgerMenu } from 'react-icons/gi'
import ResponsiveNav from '../responsiveNav'
import anglais from '../../assets/images/anglais.png'
import france from '../../assets/images/france.png'
import german from '../../assets/images/german.png'
import {useState,useEffect} from 'react'



export default function Header(){

    const hamburger = <GiHamburgerMenu className="tourne "/>
    const [dropdown,setDropdown] = useState((dropdown)=>'none')
    const [flag,setFlag] = useState((flag)=>anglais)
    const [icons,setIcons] = useState((icons)=>hamburger)
    const [iconsState,setIconsState]=useState((iconsState)=>'hamburger')
    const [close,setClose]=useState((close)=>"none")

    function manageIcons(){

        if (iconsState === 'hamburger'){
            setIcons(<ImCross className="tourne "/>);
            setIconsState('');
        }
        else{
            setIcons(<GiHamburgerMenu className="tourne "/>);
            setIconsState('hamburger');
        }


    }
    

    return (
        <>
            <nav className="border px-24 py-8 flex justify-between flex-row w-full">
                <img src={Logo} alt="digtal logo" className="logo" />
                <ul className="flex flex-row  items-center justify-center gap-x-14  item-expand">
                    <li className="text-4xl transition ease-in-out  hover:text-purple-600 font-simple hover:underline decoration-purple-600"><a href="#">Home</a></li>
                    <li className="text-4xl transition ease-in-out  hover:text-purple-600 font-simple hover:underline decoration-purple-600"><a href="#">Entreprise</a></li>
                    <li className="text-4xl transition ease-in-out hover:text-purple-600  font-simple flex flex-row items-center justify-center gap-x-4 cursor-pointer hover:underline decoration-purple-600">
                        <a href="/service">Services</a>
                        <AiFillCaretDown />
                    </li>
                    <li className="text-4xl transition ease-in-out hover:text-purple-600 font-simple hover:underline decoration-purple-600"><a href="#">Contact</a></li>
                    <li className="text-4xl transition ease-in-out hover:text-purple-600  font-simple flex flex-row items-center justify-center gap-x-4 cursor-pointer hover:underline decoration-purple-600" onClick={()=>{setDropdown('');setClose("")}}>
                        <img src={flag}  alt="france flag" className="h-12 w-12 object-contain" />
                        <AiFillCaretDown />
                    </li>
                </ul>
                <button className="text-5xl font-simple" id="normal-nav" onClick={()=>{manageIcons()}}>
                    <span className=" " >
                        {icons}
                    </span>
                </button>
            </nav>
            <div className=" choose-language relative z-10 w-full flex h-auto justify-end items-start">
                <div onMouseLeave={()=>{setDropdown('none')}} className={"languages absolute flex shadow  bg-white flex-col p-4 border divide-y items-start justify-start m-4 " + dropdown}>
                    <div onClick={()=>{setFlag(france)}} className="flex flex-row p-4 items-center justify-center gap-4 cursor-pointer">
                        <img src={france} alt="france-flag" className="h-8 w-8 object-contain" />
                        <h4 className="text-3xl">France</h4>
                    </div>
                    <div onClick={()=>{setFlag(german)}} className="flex flex-row p-4 items-center justify-center gap-4 cursor-pointer">
                        <img src={german} alt="france-flag" className="h-8 w-8 object-contain" />
                        <h4 className="text-3xl">Allemagne</h4>
                    </div>
                    <div onClick={()=>{setFlag(anglais)}} className="flex flex-row p-4 items-center justify-center gap-4 cursor-pointer">
                        <img src={anglais} alt="france-flag" className="h-8 w-8 object-contain" />
                        <h4 className="text-3xl">English</h4>
                    </div>
                </div>
            </div>
            <ResponsiveNav />
        </>
    )

}