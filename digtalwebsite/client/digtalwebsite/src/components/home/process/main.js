import  Container  from "@mui/material/Container"
import Title from "../services/title"
import ProcessLayout from "./layout"
export default function ProcSection(){
    return (
        <Container variant="div"
            className="my-8 py-4"
        >
            <Container
                className="py-16"
            >
                <Title text="HOW WE MAKE THE MAGIC HAPPEN" />
                <ProcessLayout />
            </Container>
        </Container>
    )

}