import { Container,Box } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {gsap} from "gsap"
import { useRef,useState } from "react";
import {IoIosArrowForward} from "react-icons/io"
import {MdDoubleArrow} from "react-icons/md"
import './animation.css'


//i have to organize this component 

export default function ServiceRight({image="",text="",title="",icon=""}){

    //variables
    
    const rightBox = useRef(0)
    const rightBoxText = useRef(0)
    const rightBoxImg = useRef(0)
    const rightBoxDirection = useRef(0)
    const rightBoxTitle = useRef(0)
    const [hover,setHover] = useState(hover=>"")
    const [iconstate,setIconstate] = useState(iconstate=>"hidden")
    const [icons,setIcons] = useState(icons=>"")
    //variables


        return (
            <>
        <Container 
            className="hidden relative md:flex items-center justify-between w-4/5 h-[480px] mx-8 p-0 my-4"
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
                    className="w-3/4 flex items-center justify-end"
                >
                    <IoIosArrowForward
                        ref={rightBoxDirection}
                        className={"text-purple-900 font-bold  cursor-pointer  "+icons}
                        size={80}
                        onMouseEnter={()=>{setIconstate(iconstate=>"");setIcons('hidden')}}
                        // onMouseLeave={()=>setIconstate(iconstate=>"hidden")}
                    />
                    {/* double icons */}
                    <MdDoubleArrow
                        ref={rightBoxDirection}
                        className={" text-purple-900 font-bold  cursor-pointer animate-ping "+iconstate}
                        size={80}
                        onMouseLeave={()=>{setIconstate(iconstate=>"hidden");setIcons('')}}
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
        <Container className="m-8 flex md:hidden items-center justify-center flex-column gap-0">
            <Box 
                component="div"
                className="flex items-center justify-center flex-col bg-white shadow-2xl shadow-purple-900/20"
            >
                <Box className="relative w-full h-full md:z-[2] md:h-[85%] md:bottom-0 md:right-0 md:w-[70%]  md:absolute overflow-hidden">
                    <img src={image} alt="" 
                        className={"object-cover z-[2] w-full h-[250px] transition-all "+hover}
                        ref={rightBoxImg} 
                        onMouseEnter={()=>setHover("scale-125")}
                    />
                </Box>
                <Box
                    className="flex items-center justify-around py-8 px-4 bg-white w-full gap-12"
                >
                    <Box
                        className="h-full w-full flex items-center justify-center"
                    >
                        <img src={icon} alt="" 
                            class="w-36 h-24"
                        />
                    </Box>
                    <Box
                        className="text flex-col items-center justify-start gap-2"
                    >
                        <h2
                            className="text-4xl text-start  tracking-wide text-[#2B0A3D] font-bold leading-relaxed"
                            ref={rightBoxTitle} 
                        >{title}</h2>
                        <p
                            className="text-xl text-start leading-relaxed text-[#2B0A3D]"
                            ref={rightBoxText} 
                        >{text}</p>
                    </Box>
                </Box>
                
            </Box>
        </Container>
        </>
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
    const [iconstate,setIconstate] = useState(iconstate=>"hidden")
    const [icons,setIcons] = useState(icons=>"")
    //declaration of variables

    //animations
    //animations

    return (
        <>
        <Container 
            className="hidden relative w-full md:flex flex-column items-center justify-center h-[220px] md:items-center md:justify-between md:w-4/5 md:h-[480px] md:mx-8 md:p-0 md:my-4"
        >
            <Box className="relative w-full h-full md:z-[2] md:h-[85%] md:bottom-0 md:right-0 md:w-[70%]  md:absolute overflow-hidden">
                <img src={image} alt="" 
                    className={"object-cover z-[2] w-full h-full transition-all "+hover}
                    ref={leftBoxImg} 
                    onMouseEnter={()=>setHover("scale-125")}
                />
            </Box>
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
                    component="div"
                    className="hidden invisible md:visible w-3/4 py-4 md:flex items-center justify-start"
                >
                    <IoIosArrowForward
                        ref={leftBoxDirection}
                        className={"text-purple-900 font-bold  cursor-pointer  "+icons}
                        size={80}
                        onMouseEnter={()=>{setIconstate(iconstate=>"");setIcons('hidden')}}
                        // onMouseLeave={()=>setIconstate(iconstate=>"hidden")}
                    />
                    {/* double icons */}
                    <MdDoubleArrow
                        ref={leftBoxDirection}
                        className={" text-purple-900 font-bold  cursor-pointer animate-ping "+iconstate}
                        size={80}
                        onMouseLeave={()=>{setIconstate(iconstate=>"hidden");setIcons('')}}
                    />
                </Box>
            </Box>
        </Container>
        <Container className="m-8 flex md:hidden items-center justify-center flex-column gap-0">
            <Box 
                component="div"
                className="flex items-center justify-center flex-col bg-white shadow-2xl shadow-purple-900/20 "
            >
                <Box className="relative w-full h-full md:z-[2] md:h-[85%] md:bottom-0 md:right-0 md:w-[70%]  md:absolute overflow-hidden">
                    <img src={image} alt="" 
                        className={"object-cover z-[2] w-full h-[250px] transition-all "+hover}
                        ref={leftBoxImg} 
                        onMouseEnter={()=>setHover("scale-125")}
                    />
                </Box>
                <Box
                    className="flex items-center justify-around py-8 px-4 bg-white w-full gap-12"
                >
                    <Box
                        className="h-full w-full flex items-center justify-center"
                    >
                        <img src={icon} alt="" 
                            class="w-36 h-24"
                        />
                    </Box>
                    <Box
                        className="text flex-col items-center justify-start gap-2"
                    >
                        <h2
                            className="text-4xl text-start  tracking-wide text-[#2B0A3D] font-bold leading-relaxed"
                            ref={leftBoxTitle} 
                        >{title}</h2>
                        <p
                            className="text-xl text-start leading-relaxed text-[#2B0A3D]"
                            ref={leftBoxText} 
                        >{text}</p>
                    </Box>
                </Box>
                
            </Box>
        </Container>
        </>
    )

}

//adding anything