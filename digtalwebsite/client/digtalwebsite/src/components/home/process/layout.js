import { StepRight } from "./makeprocess"
import { StepLeft } from "./makeprocess"
import { StepComputer } from "./makeprocess"
import { StepLast } from "./makeprocess"

const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa blanditiis nihil velit, eligendi, facilis necessitatibus consequuntur tenetur, quasi quo enim sapiente. Sapiente placeat vel laboriosam? Dolorem facilis asperiores autem sunt!"


export default function ProcessLayout(){
    return (
        <div 
            className="my-12 w-full flex flex-col items-center justify-center gap-4"
        >
            <StepRight />
            <StepLeft />
            <StepComputer />
            <StepLast />
        </div>
    )
}
