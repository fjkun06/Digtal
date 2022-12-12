import { Container,Box } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {gsap} from "gsap"
import { useRef, useEffect,useState } from "react";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import './animation.css'


//i have to organize this component 

export default function ServiceRight({image="",text="",title="",icon=""}){

    //variables
    
    const anim = gsap.timeline({repeat:0,delay:.5})
    const rightBox = useRef(0)
    const rightBoxText = useRef(0)
    const rightBoxImg = useRef(0)
    const rightBoxDirection = useRef(0)
    const rightBoxTitle = useRef(0)
    const [hover,setHover] = useState(hover=>"")
    //variables

    //animations

    useEffect(()=>{
        anim
            .fromTo(
                rightBoxImg.current,
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
                className=" w-full h-[85%] flex flex-col items-end justify-start top-0 right-0 absolute gap-8"
            >
                <Box component="div"
                    className="bg-white h-full z-10  shadow-2xl shadow-purple-900/20 w-3/5  py-4 flex items-center justify-around gap-8 px-4"
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
            <Box className="box-border h-[85%] bottom-0 left-0 w-[70%]  absolute overflow-hidden">
                <img src={image} alt="" 
                    onMouseEnter={()=>setHover("scale-125")}
                    className={"object-cover z-[2] w-full h-full transition-all "+hover}
                    ref={rightBoxImg}
                />
            </Box>
        </Container>
    )
}

//second box for left aligns

export  function ServiceLeft({image="",text="",icon="",title=""}){
    
    //declaration of variables
    const leftBox = useRef(0)
    const leftBoxText = useRef(0)
    const leftBoxImg = useRef(0)
    const leftBoxDirection = useRef(0)
    const leftBoxTitle = useRef(0)
    const [hover,setHover] = useState(hover=>"")
    //declaration of variables

    //animations
    //animations

    return (
        <Container 
            className="relative w-full flex flex-column items-center justify-center h-[220px] md:items-center md:justify-between md:w-4/5 md:h-[480px] md:mx-8 md:p-0 md:my-4"
        >
            {/* <Box className="relative w-full h-full md:z-[2] md:h-[85%] md:bottom-0 md:right-0 md:w-[70%]  md:absolute overflow-hidden">
                <img src={image} alt="" 
                    className={"object-cover z-[2] w-full h-full transition-all "+hover}
                    ref={leftBoxImg} 
                    onMouseEnter={()=>setHover("scale-125")}
                />
            </Box> */}
            <Box component="div" 
                className="w-full md:w-full md:h-[85%] flex flex-col items-start justify-start top-0 right-0 md:absolute gap-8"
            >
                <Box component="div"
                    className="gap-12 z-[4] h-full w-full bg-white md:h-full  shadow-2xl shadow-purple-900/20 md:w-3/5  py-4 flex items-center justify-around md:gap-8 px-8"
                    ref={leftBox}
                >
                    <img src={icon} alt="" 
                        class="max-w-24 h-24 "
                    />
                    <Box className="w-full flex flex-col">
                        <h2
                            className="text-4xl text-start md:text-6xl md:my-2 md:text-start tracking-wide text-[#2B0A3D] font-bold leading-relaxed"
                            ref={leftBoxTitle} 
                        >{title}</h2>
                        <p
                            className="text-xl text-start leading-relaxed text-[#2B0A3D] md:text-3xl"
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

//adding anything