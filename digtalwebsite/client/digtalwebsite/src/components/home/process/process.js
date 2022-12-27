import Container  from "@mui/material/Container";
import { Typography } from "@mui/material";
import vectorL from "../../../assets/images/process/vector-left.png"
import vectorR from "../../../assets/images/process/vector-right.png"


export function ProcessText({text,image,icon="",vector="",reverse=false}){
    return reverse?(
        <Container
            className="flex items-start justify-start gap-6 w-full md:max-w-[95rem]"
        >
            <div
                className="w-full flex flex-col gap-y-4"
            >
                <Typography 
                    variant="p"
                    className="text-base lg:text-4xl text-start leading-loose text-[#2B0A3D]  font-bold"
                >
                    {text}
                </Typography>
                <Container
                    variant="div"
                    className="w-full flex items-center justify-center py-4"
                >
                    <Container
                        className="w-full flex items-center justify-center"
                    >
                    <img src={icon} alt=""
                        className="w-24 h-auto object-contain md:hidden "
                    />
                </Container>
                </Container>
            </div>
            <Container className="w-fit max-w-[17rem] flex flex-col items-center justify-center h-full relative">
                <img src={image} alt="circle digtal" 
                    className="w-[15rem] md:w-[10rem] h-auto"
                />
                <img src={vector} alt="" className="scale-[1.8] translate-y-40 -z-10 md:hidden" />
            </Container>
        </Container>
    )
    :(
        <Container
            className="flex items-start justify-start gap-6 w-full md:max-w-[95rem]"
        >
            <Container className="w-fit max-w-[17rem] flex flex-col items-center justify-center h-full relative">
                <img src={image} alt="circle digtal" 
                    className="md:w-[10rem] h-auto"
                />
                <img src={vector} alt="" className="scale-[1.8] translate-y-40 -z-10 md:hidden" />
            </Container>
            <div
                className="w-full flex flex-col gap-y-4"
            >
                <Typography 
                    variant="p"
                    className="text-base lg:text-4xl text-start leading-loose text-[#2B0A3D]  font-bold"
                >
                    {text}
                </Typography>
                <Container
                    variant="div"
                    className="w-full flex items-center justify-center py-4"
                >
                    <Container
                    className="w-full flex items-center justify-center"
                >
                    <img src={icon} alt=""
                        className="w-24 h-auto object-contain md:hidden"
                    />
                </Container>
                </Container>
            </div>
        </Container>
    )
}


export function ProcessImage({icon=''}){
    return (
        
            <Container
                className="hidden md:flex items-around justify center"
            >
                <Container
                    className=""
                >
                    <img src={vectorL} alt=""
                        className="w-64 h-auto object-contain hidden md:block"
                    />
                </Container>
                <Container
                >
                    <img src={icon} alt=""
                        className="w-24 h-auto object-contain hidden md:block"
                    />
                </Container>
            </Container>
    )
}

export function ProcessImageLeft({icon=''}){
    return (
        <Container
            className="hidden md:flex items-between justify-center max-w-fit"
        >
            <Container
                className="max-w-fit"
            >
                <img src={icon} alt=""
                    className="w-24 h-auto object-contain hidden md:block"
                />
            </Container>
            <Container>
                <img src={vectorR} alt=""
                    className="w-64 h-auto object-contain hidden md:block"
                />
            </Container>
        </Container>
    )
}

export function ProcessImageInvisible({icon=''}){
    return (
        <Container
            className="hidden md:flex items-around justify-center max-w-fit invisible"
        >
            <Container
                className="max-w-fit"
            >
                <img src={icon} alt=""
                    className="w-24 h-auto object-contain"
                />
            </Container>
            <Container>
                <img src={vectorR} alt=""
                    className="w-64 h-auto object-contain"
                />
            </Container>
        </Container>
    )
}