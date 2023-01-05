import { Container } from "@mui/material";
// import Title from "../services/config";
import SwiperBrands from "./brands";

export default function BrandSection() {
  return (
    <Container variant="div" className="w-full bg-transparent py-4 ">
      {/* <Title text="OUR TECHNOLOGIES" /> */}
      <SwiperBrands />
      <SwiperBrands />
      <SwiperBrands />
    </Container>
  );
}
