
import icon from "../../../assets/svg/services/digitalmarketing/down.png"
import './css/header.css'
import {FaChevronDown} from "react-icons/fa"
export default function HeaderDigitalMarketing(){
    return (
        <div className="relative w-full h-[60vh] laptop:h-[80vh]">
            <div className="digitalmarketing__header w-full h-full blur-md  "></div>
            <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center text-6xl absolu">
                    <p className="leading-relaxed z-10 text-[rebeccapurple] font-extrabold block tablet:hidden">
                        DIGITAL <br/>
                        MARKETING
                    </p>
                    <p className="leading-relaxed z-10 text-[rebeccapurple] font-extrabold hidden tablet:block laptop:text-[6rem]">
                        DIGITAL
                        MARKETING
                    </p>
            </div>
            <div className="animations-icons flex w-full items-center justify-center flex-col p-8 -translate-y-[18rem] tablet:hidden ">
                <FaChevronDown src={icon} className=" text-[6rem] h-[4rem] icon-animation  " alt="fe"/>
                <FaChevronDown src={icon} className="text-[6rem] h-[4rem] icon-animation q " alt="fe"/>
            </div>
        </div>
    )
}