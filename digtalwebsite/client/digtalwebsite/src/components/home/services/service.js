import { Container,Box } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {gsap} from "gsap"
import { useRef, useEffect } from "react";
import {ScrollTrigger} from "gsap/ScrollTrigger";


//i have to organize this component 

export default function ServiceRight({image="",text="",title="",icon=""}){

    //variables
    gsap.registerPlugin(ScrollTrigger)
    const anim = gsap.timeline({repeat:0,delay:.5})
    const rightBox = useRef(0)
    const rightBoxText = useRef(0)
    const rightBoxImg = useRef(0)
    const rightBoxDirection = useRef(0)
    const rightBoxTitle = useRef(0)
    //variables

    //animations

    useEffect(()=>{
        anim
            .fromTo(
                rightBoxImg.current,
                {
                scale:.1,
                opacity:.2,
                ease:true,
                backgroundColor:"transparent"
            }
            ,{
                opacity:1,
                scale:1,
                duration:.5,
                backgroundColor:"white"
        }
        )
        .fromTo(
            rightBox.current,
            {
                opacity:0,
                yoyo:true,
                x:200
            },
            {
                duration:.7,
                opacity:1,
                x:0
            }
        )
        .fromTo(
            rightBoxText.current,
            {
                lineHeight:0,
                opacity:0,
                ease:true,
            },{
                duration:.5,
                lineHeight:2.2,
                opacity:1,
                duration:1.5
            }
        )
        .fromTo(
            rightBoxDirection.current,
            {
                y:100,
                opacity:0,
                ease:true,
            },{
                y:0,
                opacity:1,
                duration:1
            }
        )
        .fromTo(
            rightBoxTitle.current,
            {
                y:-30,
                opacity:0,
                ease:true,
            },{
                y:0,
                duration:.2,
                opacity:1,
            }
        )
    },[])

    //ends of animations

    return (
        <Container 
            className="relative flex items-center justify-between w-4/5 h-[480px] mx-8 p-0 my-4"
        >
            <Box
                className="z-40  w-full h-[85%] flex flex-col items-end justify-start top-0 right-0 absolute gap-8"
            >
                <Box component="div"
                    className="bg-white h-full  shadow-2xl shadow-purple-900/20 w-3/5  py-4 flex items-center justify-around gap-8 px-4"
                    ref={rightBox}
                >
                    <img src={icon} alt="" class="max-w-24 h-24 " />
                    <Box className="w-full">
                        <h2
                            ref={rightBoxTitle}
                            className="text-6xl my-2 text-start tracking-wide text-[#2B0A3D] font-bold leading-relaxed capitalize "
                        >{title}</h2>
                        <p
                            className="text-start leading-relaxed text-3xl text-[#2B0A3D]"
                            ref={rightBoxText}
                        >{text}</p>
                    </Box>
                </Box>
                <Box
                    className="w-3/4 py-4 flex items-center justify-end "
                >
                    <ArrowForwardIosIcon 
                        ref={rightBoxDirection}
                        className="text-6xl text-purple-900 font-bold  cursor-pointer"
                    />
                </Box>
            </Box>
            <img src={image} alt="" 
                className="object-cover z-[2] h-[85%] bottom-0 left-0 w-[70%]  absolute"
                ref={rightBoxImg}
            />
        </Container>
    )
}

//second box for left aligns

export  function ServiceLeft({image="",text="",icon="",title=""}){
    
    //declaration of variables
    const anim = gsap.timeline()
    const leftBox = useRef(0)
    const leftBoxText = useRef(0)
    const leftBoxImg = useRef(0)
    const leftBoxDirection = useRef(0)
    const leftBoxTitle = useRef(0)
    //declaration of variables

    //animations
    useEffect(()=>{
        anim
            .fromTo(
                leftBoxImg.current,
                {
                scale:.1,
                opacity:.2,
                ease:true
            }
            ,{
                opacity:1,
                scale:1,
                duration:.5
        }
        )
        .fromTo(
            leftBox.current,
            {
                opacity:0,
                yoyo:true,
                x:-200
            },
            {
                duration:.7,
                opacity:1,
                x:0
            }
        )
        .fromTo(
            leftBoxText.current,
            {
                lineHeight:0,
                opacity:0,
                ease:true,
            },{
                duration:.5,
                lineHeight:1.6,
                opacity:1,
                duration:1.5
            }
        )
        .fromTo(
            leftBoxDirection.current,
            {
                y:100,
                opacity:0,
                ease:true,
            },{
                y:0,
                opacity:1,
                duration:1
            }
        )
        .fromTo(
            leftBoxTitle.current,
            {
                y:-30,
                opacity:0,
                ease:true,
            },{
                y:0,
                duration:.2,
                opacity:1,
            }
        )
    },[])
    //animations

    return (
        <Container 
            className="relative flex items-center justify-between w-4/5 h-[480px] mx-8 p-0 my-4"
        >
            <img src={image} alt="" 
                className="object-cover z-[2] h-[85%] bottom-0 right-0 w-[70%]  absolute"
                ref={leftBoxImg} 
            />
            <Box component="div" 
                className="z-40  w-full h-[85%] flex flex-col items-start justify-start top-0 right-0 absolute gap-8"
            >
                <Box component="div"
                    className="bg-white h-full  shadow-2xl shadow-purple-900/20 w-3/5  py-4 flex items-center justify-around gap-8 px-4"
                    ref={leftBox}
                >
                    <img src={icon} alt="" 
                        class="max-w-24 h-24 "
                    />
                    <Box className="w-full flex flex-col">
                        <h2
                            className="text-6xl my-2 text-start tracking-wide text-[#2B0A3D] font-bold leading-relaxed"
                            ref={leftBoxTitle} 
                        >{title}</h2>
                        <p
                            className="text-start leading-relaxed text-[#2B0A3D] text-3xl"
                            ref={leftBoxText} 
                        >{text}</p>
                    </Box>
                </Box>
                <Box
                    className="w-3/4 py-4 flex items-center justify-start"
                >
                    <ArrowForwardIosIcon 
                        className="text-6xl text-purple-900 font-bold cursor-pointer"
                        ref={leftBoxDirection} 
                    />
                </Box>
            </Box>
        </Container>
    )

}