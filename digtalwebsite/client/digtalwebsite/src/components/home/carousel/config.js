import { Box } from "@mui/material"
import slideOne from "../../../assets/images/carousel/noir3.jpg"
import slideTwo from "../../../assets/images/carousel/noir4.jpg"
import slideTree from "../../../assets/images/carousel/noir1.jpg"
import slideFour from "../../../assets/images/carousel/noir2.jpg"
import gsap from 'gsap'
import {useEffect,useRef} from 'react'

export function Carousel(){

    const firstRef = useRef(0)
    const secondRef = useRef(1)
    const timeline = gsap.timeline({repeat:100000,repeatDelay:3})

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
                delay:2
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
    })


    return (
        <Box className="w-full h-full p-0 m-0 relative">
            <img src={slideOne} alt="meeting digtal" className="object-cover w-full h-full"  />
            <Box
                className="absolute top-0 w-full h-full flex flex-col items-center justify-center"
            >
                <h2
                    className="text-5xl md:text-7xl text-white text-center leading-snug font-bold firstanimation animation-left"
                    ref={firstRef}
                >
                    Let professional handle your projects 
                </h2>
                <h2
                    ref={secondRef}
                    className="text-5xl md:text-7xl text-white text-center leading-snug font-bold animation-left-one"
                >
                    And make it come to life
                </h2>
            </Box>
        </Box>
    )
}

export function CarouselTwo(){

    const thirdRef = useRef(0)
    const fourthRef = useRef(1)
    const timeline = gsap.timeline({repeat:100000,repeatDelay:3})

    useEffect(()=>{
        timeline.fromTo(
            thirdRef.current,
            {
                y:-100,
                opacity:0,
            },
            {
                duration:1,
                opacity:1,
                y:0,
                delay:2
            }
        )
        .fromTo(
            fourthRef.current,
            {
                y:-100,
                opacity:0
            },
            {
                opacity:1,
                y:0,
            }
        )
    })


    return (
        <Box className="w-full h-full p-0 m-0 relative">
            <img src={slideTwo} alt="meeting digtal" className="object-cover w-full h-full"  />
            <Box
                className="absolute top-0 w-full h-full flex flex-col items-center justify-center"
            >
                <h2
                    className="text-5xl md:text-7xl text-white text-center leading-snug font-bold firstanimation animation-left"
                    ref={thirdRef}
                >
                    Let professional handle your projects 
                </h2>
                <h2
                    ref={fourthRef}
                    className="text-5xl md:text-7xl text-white text-center leading-snug font-bold animation-left-one"
                >
                    And make it come to life
                </h2>
            </Box>
        </Box>
    )
}

export function CarouselTree(){

    const troisRef = useRef(0)
    const quatreRef = useRef(1)
    const timeline = gsap.timeline({repeat:100000,repeatDelay:3})

    useEffect(()=>{
        timeline.fromTo(
            troisRef.current,
            {
                y:-100,
                opacity:0,
            },
            {
                duration:1,
                opacity:1,
                y:0,
                delay:2
            }
        )
        .fromTo(
            quatreRef.current,
            {
                y:-100,
                opacity:0
            },
            {
                opacity:1,
                y:0,
            }
        )
    })


    return (
        <Box className="w-full h-full p-0 m-0 relative">
            <img src={slideTree} alt="meeting digtal" className="object-cover w-full h-full"  />
            <Box
                className="absolute top-0 w-full h-full flex flex-col items-center justify-center"
            >
                <h2
                    className="text-5xl md:text-7xl text-white text-center leading-snug font-bold firstanimation animation-left"
                    ref={troisRef}
                >
                    Let professional handle your projects 
                </h2>
                <h2
                    ref={quatreRef}
                    className="text-5xl md:text-7xl text-white text-center leading-snug font-bold animation-left-one"
                >
                    And make it come to life
                </h2>
            </Box>
        </Box>
    )
}

export function CarouselFour(){

    const thirdRef = useRef(0)
    const fourthRef = useRef(1)
    const timeline = gsap.timeline({repeat:100000,repeatDelay:3})

    useEffect(()=>{
        timeline.fromTo(
            thirdRef.current,
            {
                y:-100,
                opacity:0,
            },
            {
                duration:1,
                opacity:1,
                y:0,
                delay:2
            }
        )
        .fromTo(
            fourthRef.current,
            {
                y:-100,
                opacity:0
            },
            {
                opacity:1,
                y:0,
            }
        )
    })


    return (
        <Box className="w-full h-full p-0 m-0 relative">
            <img src={slideFour} alt="meeting digtal" className="object-cover w-full h-full"  />
            <Box
                className="absolute top-0 w-full h-full flex flex-col items-center justify-center"
            >
                <h2
                    className="text-5xl md:text-7xl text-white text-center leading-snug font-bold firstanimation animation-left"
                    ref={thirdRef}
                >
                    Let professional handle your projects 
                </h2>
                <h2
                    ref={fourthRef}
                    className="text-5xl md:text-7xl text-white text-center leading-snug font-bold animation-left-one"
                >
                    And make it come to life
                </h2>
            </Box>
        </Box>
    )
}