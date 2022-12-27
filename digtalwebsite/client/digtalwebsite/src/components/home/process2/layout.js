import { Container } from "@mui/system";

export default function ProcessLayout({children}){

    return (
        <Container className="my-8 flex items-center py-8 gap-8 flex-col justify-center px-0">
            {children}
        </Container>
    )

}