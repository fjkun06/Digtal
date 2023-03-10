
import icon from "../../../assets/svg/services/digitalmarketing/down.png"
import './css/header.css'
import {HiOutlineArrowTrendingUp} from "react-icons/hi2"
import {FaChevronDown} from "react-icons/fa"
export default function HeaderDigitalMarketing(){
    return (
        <div className="relative w-full h-[60vh] laptop:h-[90vh]  overflow-hidden">
            <div className="digitalmarketing__header w-full h-full blur-md overflow-hidden"></div>
            <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center text-6xl absolu overflow-hidden">
                    <div className="w-full hidden tablet:flex items-center justify-center gap-6 laptop:gap-16">
                        <HiOutlineArrowTrendingUp className="text-[8rem] -rotate-[15deg] icon-hover laptop:scale-150 text-[rebeccapurple] font-normal" />
                        <p className="leading-relaxed z-10 text-[rebeccapurple] font-extrabold laptop:text-[6rem]">
                            DIGITAL
                            MARKETING
                        </p>
                    </div>
                    <div className="w-full flex tablet:hidden items-center justify-center gap-6 laptop:gap-16">
                        <HiOutlineArrowTrendingUp className="text-[8rem] laptop:scale-150 text-[rebeccapurple] font-normal -rotate-[15deg]" />
                        <p className="leading-relaxed z-10 text-[rebeccapurple] font-extrabold block tablet:hidden">
                        DIGITAL <br/>
                        MARKETING
                    </p>
                    </div>
            </div>
            <div className="animations-icons flex w-full items-center justify-center flex-col p-8 -translate-y-[18rem] tablet:hidden ">
                <FaChevronDown src={icon} className=" text-[6rem] h-[4rem] icon-animation  " alt="fe"/>
                <FaChevronDown src={icon} className="text-[6rem] h-[4rem] icon-animation q " alt="fe"/>
            </div>
        </div>
    )
}