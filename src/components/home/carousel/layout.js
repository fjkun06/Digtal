import { Container } from "@mui/material/Container";


export default function Layout({children}){

    return (
        <Container
            className="h-[80rem] w-full"
        >
            {children}           
        </Container>
    )

}