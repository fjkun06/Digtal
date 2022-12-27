import { Container } from "@mui/system";
import { Box } from "@mui/material";
import quart from "../../../assets/images/process/1-4.png"
import Typography from "@mui/material/Typography";
import right from "../../../assets/images/process/right.png"
import left from "../../../assets/images/process/left.png"
import { BlurContext } from "./hook";
import { useContext,useState } from "react";
import down from "../../../assets/images/process/down.png"

export function ProcessLine({children}){

    return (
        <Container
            className="flex items-between gap-4 px-0 my-8"
        >
            {children}
        </Container>
    )

}

export function IconsLine({children}){
    return (
        <Container
            className="flex justify-around items-center"
        >
            {children}
        </Container>
    )
}

export function ProcessBloc({icon=quart}){

    const [scale,setScale] = useState(scale=>"")

    const blurValue = useContext(BlurContext).blur
    const setBlurValue = useContext(BlurContext).setBlur
    console.log("blur value: ",blurValue)

    const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa blanditiis nihil velit, eligendi, facilis necessitatibus consequuntur tenetur, quasi quo enim sapiente. Sapiente placeat vel laboriosam? Dolorem facilis asperiores autem sunt!"

    return (
        <Box
            variant="div"
            className={"flex justify-between items-center p-2 gap-8 transition-transform  z-20 "+scale}
            onMouseEnter={()=>{setScale('scale-150 blur-none')}}
            onMouseLeave={()=>{setScale('');setBlurValue(blurValue=>"")}}
        >
            <img src={icon} alt=""/>
            <Typography 
                    variant="p"
                    className="text-3xl text-start leading-loose text-[#2B0A3D]  font-medium"
            >
                {text}
            </Typography>
        </Box>
    )

}

export function Separator(){
    return (
        <Box
            className="flex items-center justify-center"
        >
            <img src={right} alt="" className="max-w-[15rem] object-contain "/>
        </Box>
    )
}

export function SeparatorLeft(){
    return (
        <Box
            className="flex items-center justify-center"
        >
            <img src={left} alt="" className="max-w-[15rem] object-contain "/>
        </Box>
    )
}

export function MobileSeparatorLine({icon}){
    return (
        <Container
            className="flex items-center justify-center py-4"
        >
            <img src={icon} alt=""/>
        </Container>
    )
}


export function SingleIcon({iconName,invisible=false}){

    const hide = invisible?"invisible":""

    return (
        <Box
            className="flex items-center justify-center"
        >
            <img src={iconName} alt="" className={"max-w-[15rem] object-contain "+hide}/>
        </Box>
    )
}

export function MobileProcessBloc({reverse=false,icon,direction=false}){

    const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa blanditiis nihil velit, eligendi, facilis necessitatibus consequuntur tenetur, quasi quo enim sapiente. Sapiente placeat vel laboriosam? Dolorem facilis asperiores autem sunt!"

    return reverse?(
        <Container
            className="md:hidden  relative flex items-center justify-between p-2 gap-8 transition-transform  z-20"
        >
            <img src={icon} alt=""/>
            <img src={down} alt="" className="absolute z-40 -bottom-48 w-[13rem] h-[13rem] object-contain left-0" />
            <Typography
                variant="p"
                className="text-2xl text-start leading-loose text-[#2B0A3D]  font-medium z-20"
            >
                {text}
            </Typography>
        </Container>
    ):
    (
        <Container
            className="md:hidden relative flex items-center justify-between p-2 gap-8 transition-transform  z-20"
        >
            <Typography
                variant="p"
                className="text-2xl text-start leading-loose text-[#2B0A3D]  font-medium z-20 "
            >
                {text}
            </Typography>
            <img src={icon} alt=""/>
            {
                direction?<img src={down} alt="" className="absolute -bottom-48 w-[13rem] h-[13rem] object-contain right-0" />:""
            }
        </Container>
    )
}