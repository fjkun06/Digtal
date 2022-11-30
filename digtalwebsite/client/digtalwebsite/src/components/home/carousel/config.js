import { Box } from "@mui/material"
import slideOne from "../../../assets/images/carousel/slider4.jpg"

export function Carousel(){
    return (
        <Box className="w-full h-full p-0 m-0">
            <img src={slideOne} alt="meeting digtal" className="object-cover w-full h-full"  />
        </Box>
    )
}
