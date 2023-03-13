
import icon from "../../../assets/svg/services/digitalmarketing/down.png"
import './css/header.css'
import {HiOutlineArrowTrendingUp} from "react-icons/hi2"
import {FaChevronDown} from "react-icons/fa"
export default function HeaderDigitalMarketing(){
    return (
        <div className="digital-marketing-header">
            <div className="digital-marketing-header__wrapper digitalmarketing__header"></div>
            <div className="digital-marketing-header__container">
                    <div className="digital-marketing-header__content">
                        <HiOutlineArrowTrendingUp className="icon-style" />
                        <p className="text-style">
                            DIGITAL
                            MARKETING
                        </p>
                    </div>
                    <div className="digital-marketing-header-content-responsive">
                        <HiOutlineArrowTrendingUp className="icon-style -rotate-[15deg]" />
                        <p className="responsive-text-style">
                        DIGITAL <br/>
                        MARKETING
                    </p>
                    </div>
            </div>
            <div className="animate-icon">
                <FaChevronDown src={icon} className=" icon-bounce  " alt="fe"/>
                <FaChevronDown src={icon} className="icon-bounce  " alt="fe"/>
            </div>
        </div>
    )
}