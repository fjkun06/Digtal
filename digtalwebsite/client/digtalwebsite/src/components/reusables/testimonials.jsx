import {ImQuotesLeft} from "react-icons/im"
import {ImQuotesRight} from "react-icons/im"
import girl from "../../assets/images/profile1.jpg"
import { useTranslation } from "react-i18next";

export default function Testimonials({text,author,image}){


    const { t } = useTranslation("marketing");

    return (
        <div className="flex w-full px-6 flex-col laptop:w-4/5 ">
            <div className="image flex items-center justify-center p-2">
                <img src={image} alt="testimonial" className="w-36 h-36 rounded-full object-cover " />
            </div>
            <div className="flex w-full items-start justify-center p-2">
                <ImQuotesLeft className="text-[8rem] text-[rebeccapurple]" />
                <p className="text-center p-4 pt-16 font-[400]  leading-[23px] font-['Poppins'] text-black text-opacity-[65] text-xl laptop:text-3xl">{t(text)}</p>
                <ImQuotesRight className="text-[8rem] text-[rebeccapurple]" />
            </div>
            <div className="image flex items-center justify-center p-2">
                <p className="text-xl font-[400] laptop:text-2xl font-['Poppins'] text-[#663399]">{t(author)}</p>
            </div>
        </div>
    )
}