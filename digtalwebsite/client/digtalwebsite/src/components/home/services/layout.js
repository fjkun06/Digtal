import { Box } from "@mui/material"

export default function ServicesLayout({children}){
    return (
        <Box className="w-full my-8" sx={{
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
            justifyContent:"center",
            gap:4,
            background:'url()',
            marginVertical:"3rem"
        }}>
            {children}
        </Box>
    )
}