import { Box } from "@mui/material"
import slideOne from "../../../assets/images/carousel/slider4.jpg"
import gsap from 'gsap'
import {useEffect,useRef} from 'react'

export function Carousel(){

    const firstRef = useRef(0)
    const secondRef = useRef(1)
    const timeline = gsap.timeline()

    useEffect(()=>{
        timeline.fromTo(
            firstRef.current,
            {
                x:-100,
                opacity:0,
            },
            {
                duration:1,
                opacity:1,
                x:0,
                delay:1
            }
        )
        .fromTo(
            secondRef.current,
            {
                x:-100,
                opacity:0
            },
            {
                opacity:1,
                x:0,
            }
        )
    },[])


    return (
        <Box className="w-full h-full p-0 m-0 relative">
            <img src={slideOne} alt="meeting digtal" className="object-cover w-full h-full"  />
            <Box
                className="absolute top-0 w-full h-full flex flex-col items-center justify-center"
            >
                <h2
                    className="text-7xl text-white text-center leading-snug font-bold firstanimation animation-left"
                    ref={firstRef}
                >
                    Let professional handle your projects 
                </h2>
                <h2
                    ref={secondRef}
                    className="text-7xl text-white text-center leading-snug font-bold animation-left-one"
                >
                    And make it come to life
                </h2>
            </Box>
        </Box>
    )
}
