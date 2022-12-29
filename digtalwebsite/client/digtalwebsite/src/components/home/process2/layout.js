import { Container } from "@mui/system";
import { useContext } from "react";
import { BlurContext } from "./hook";

export default function ProcessLayout({children}){

    const blurValue = useContext(BlurContext).blur

    return (
        <Container className={"hidden my-8 md:flex items-center py-8 gap-8 flex-col justify-center px-0 "+blurValue}>
            {children}
        </Container>
    )

}

export  function MobileProcessLayout({children}){

    const blurValue = useContext(BlurContext).blur

    return (
        <Container className={"md:hidden px-8 my-8 flex items-center py-8 gap-16 flex-col justify-center "+blurValue}>
            {children}
        </Container>
    )

}
