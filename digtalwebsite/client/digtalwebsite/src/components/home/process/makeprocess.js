import { ProcessText } from "./process"
import { ProcessImage } from "./process"
import { ProcessImageLeft } from "./process"
import { ProcessImageInvisible } from "./process"
import quart from "../../../assets/images/process/1-4.png"
import semi from "../../../assets/images/process/1-2.png"
import third from "../../../assets/images/process/1-3.png"
import full from "../../../assets/images/process/1.png"
import coffee from "../../../assets/images/process/coffee.png"
import edit from "../../../assets/images/process/edit.png"
import computer from "../../../assets/images/process/laptop.png"

const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa blanditiis nihil velit, eligendi, facilis necessitatibus consequuntur tenetur, quasi quo enim sapiente. Sapiente placeat vel laboriosam? Dolorem facilis asperiores autem sunt!"


export function StepRight(){

    return (
        <div 
            className="my-12 w-full flex items-center justify-start "
        >
            <ProcessText text={text} image={quart} />
            <ProcessImage icon={coffee} />
        </div>
    )
    
}

export function StepLeft(){
    return (
        <div 
            className="my-12 w-full flex items-center justify-start "
        >
            <ProcessImageLeft icon={edit}/>
            <ProcessText text={text} image={semi} />
        </div>
    )
}

export function StepComputer(){

    return (
        <div 
            className="my-12 w-full flex items-center justify-start "
        >
            <ProcessText text={text} image={third} />
            <ProcessImage icon={computer} />
        </div>
    )

}

export function StepLast(){

    return (
        <div 
            className="my-12 w-full flex items-center justify-start "
        >
            <ProcessImageInvisible icon={computer} />
            <ProcessText text={text} image={full} />
        </div>
    )

}