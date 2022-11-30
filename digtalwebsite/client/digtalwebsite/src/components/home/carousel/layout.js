import { useRef,useEffect } from "react"
import gsap from "gsap"

export default function CarouselLayout({children}){

    const sliderRef = useRef(0);
    useEffect(()=>{
        gsap.fromTo(
            sliderRef.current,
            {
                height:'0px',
                zIndex:15000,
                ease:'true'
            },
            {
                position:'relative',
                duration:3,
                height:'95vh',
                width:'100%'
            }
        )
    },[])
    return (
        <div
            className="border  z-20 w-full h-[90vh] shadow-xl p-0 m-0 backdrop-contrast-50 bg-white shadow-purple-200"
            ref={sliderRef}
        >
            {children}
        </div>
    )

}