import {ImQuotesLeft} from "react-icons/im"
import {ImQuotesRight} from "react-icons/im"
import girl from "../../assets/images/profile1.jpg"

export default function Testimonials(){
    return (
        <div className="flex w-full px-6 flex-col laptop:w-4/5 ">
            <div className="image flex items-center justify-center p-2">
                <img src={girl} alt="testimonial" className="w-36 h-36 rounded-full object-cover " />
            </div>
            <div className="flex w-full items-start justify-center p-2">
                <ImQuotesLeft className="text-[8rem] text-[rebeccapurple]" />
                <p className="text-center p-4 pt-16 font-light font-[Poppins] text-xl laptop:text-3xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum voluptate ut placeat veniam iure. Tenetur nemo ipsa quae! Inventore eos delectus libero deleniti ullam iusto tenetur dolorum, consequatur cum aspernatur?</p>
                <ImQuotesRight className="text-[8rem] text-[rebeccapurple]" />
            </div>
            <div className="image flex items-center justify-center p-2">
                <p className="text-xl text-[rebeccapurple] font-bold laptop:text-2xl">John Doe,CEO of ABC.inc</p>
            </div>
        </div>
    )
}