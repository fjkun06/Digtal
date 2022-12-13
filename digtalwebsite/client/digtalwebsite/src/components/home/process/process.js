import Container  from "@mui/material/Container";
import quart from "../../../assets/images/process/1-4.png"
import { Typography } from "@mui/material";
import vectorL from "../../../assets/images/process/vector-left.png"
import vectorR from "../../../assets/images/process/vector-right.png"



export function ProcessText({text,image}){
    return (
        <Container
            className="flex items-start justify-start gap-6 max-w-[30rem] md:max-w-[95rem]"
        >
            <img src={image} alt="circle digtal" 
                className="w-[10rem] h-auto"
            />
            <Typography 
                variant="p"
                className="text-2xl text-start leading-relaxed text-[#2B0A3D]  "
            >
                {text}
            </Typography>
        </Container>
    )
}


export function ProcessImage({icon=''}){
    return (
        <Container
            className="flex items-around justify center"
        >
            <Container
                className=""
            >
                <img src={vectorL} alt=""
                    className="w-64 h-auto object-contain"
                />
            </Container>
            <Container>
                <img src={icon} alt=""
                    className="w-24 h-auto object-contain"
                />
            </Container>
        </Container>
    )
}

export function ProcessImageLeft({icon=''}){
    return (
        <Container
            className="flex items-around justify-center max-w-fit"
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

export function ProcessImageInvisible({icon=''}){
    return (
        <Container
            className="flex items-around justify-center max-w-fit invisible"
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