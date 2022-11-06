import { Container,Box } from "@mui/material";
import img from  "../../../assets/images/section3.png"
import img2 from "../../../assets/images/section2.png"
import img3 from "../../../assets/images/section1.png"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
export default function ServicerFirst({image="",text="",title="",icon=""}){
    return (
        <Container 
            className="relative flex items-center justify-center w-3/5 h-[380px] mx-8 my-4"
        >
            <img src={img} alt="" 
                className="object-cover w-[100%] h-full"
            />
            <Box component="div" 
                className="absolute top-0 left-2/4  w-4/5 h-full flex flex-col items-center justify-center gap-8"
            >
                <Box component="div"
                    className="bg-white  shadow-xl shadow-purple-900/20 w-3/4 min-h-[20rem] px-2 py-4"
                >
                    <h2
                        className="text-3xl text-center tracking-wide text-purple-900 font-bold leading-relaxed"
                    >web & mobile development</h2>
                    <p
                        className="text-start leading-relaxed"
                    >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate iure fugit, minus magnam veniam esse autem facere laudantium, quas obcaecati modi, assumenda cumque quis est debitis accusantium porro ratione odio.</p>
                </Box>
                <Box
                    className="w-3/4 py-4 flex items-center justify-end "
                >
                    <ArrowForwardIosIcon 
                        className="text-5xl text-purple-900 font-bold  cursor-pointer"
                    />
                </Box>
            </Box>
        </Container>
    )
}

export  function ServiceSecond(){

    return (
        <Container 
            className="relative flex items-center justify-center w-3/5 h-[380px] mx-8 my-4"
        >
            <img src={img2} alt="" 
                className="object-cover w-[100%] h-full"
            />
            <Box component="div" 
                className="absolute top-0 right-2/4  w-4/5 h-full flex flex-col items-center justify-center gap-8"
            >
                <Box component="div"
                    className="bg-white  shadow-xl w-3/4 shadow-purple-900/20 min-h-[20rem] px-2 py-4 "
                >
                    <h2
                        className="text-3xl text-center tracking-wide text-purple-900 font-bold leading-relaxed"
                    >Digital Marketing</h2>
                    <p
                        className="text-start leading-relaxed"
                    >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate iure fugit, minus magnam veniam esse autem facere laudantium, quas obcaecati modi, assumenda cumque quis est debitis accusantium porro ratione odio.</p>
                </Box>
                <Box
                    className="w-3/4 py-4 flex items-center justify-start"
                >
                    <ArrowForwardIosIcon 
                        className="text-5xl text-purple-900 font-bold cursor-pointer"
                    />
                </Box>
            </Box>
        </Container>
    )

}

export  function ServiceThird(){

    return (
        <Container 
            className="relative flex items-center justify-center w-3/5 h-[380px] mx-8 my-4"
        >
            <img src={img3} alt="" 
                className="object-cover w-[100%] h-full"
            />
            <Box component="div" 
                className="absolute top-0 left-2/4  w-4/5 h-full flex flex-col items-center justify-center gap-8"
            >
                <Box component="div"
                    className="bg-white  shadow-xl w-3/4 shadow-purple-900/20 min-h-[20rem] px-2 py-4"
                >
                    <h2
                        className="text-3xl text-center tracking-wide text-purple-900 font-bold leading-relaxed"
                    >Consulting</h2>
                    <p
                        className="text-start leading-relaxed"
                    >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate iure fugit, minus magnam veniam esse autem facere laudantium, quas obcaecati modi, assumenda cumque quis est debitis accusantium porro ratione odio.</p>
                </Box>
                <Box
                    className="w-3/4 py-4 flex items-center justify-end "
                >
                    <ArrowForwardIosIcon 
                        className="text-5xl text-purple-900 font-bold  cursor-pointer"
                    />
                </Box>
            </Box>
        </Container>
    )

}