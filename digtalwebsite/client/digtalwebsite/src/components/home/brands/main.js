import { Container } from "@mui/material"
import Title from "../services/title"
import SwiperBrands from "./brands"

export default function BrandSection(){

    return(
        <Container
            variant="div"
            className="py-4 w-full bg-transparent "
        >
            <Title text="OUR TECHNOLOGIES" />
            <SwiperBrands />
            <SwiperBrands />
            <SwiperBrands />
        </Container>
    )
}