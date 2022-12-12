import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import diversity from "../assets/images/diversity.png";
import leonel from "../assets/images/leonel.png";
import { Image } from "mui-image";

export default function AboutUs() {
  return (
    <Grid mt={10} className="about">
      <Stack direction="column" justifyContent="center" alignItems="center" className="h-screen [&>*]:font-['Poppins']">
        <Typography className="caption">We are professionals, Bringing to you a.</Typography>
        <Typography className="capitalize font-bold text-[62px] text-[color:rebeccapurple]">Diversity of Solution</Typography>
      </Stack>
      <Box className="h-[70vh] relative">
        <Image src={diversity} />
        <Typography
          variant="h3"
          classes={{
            root: "bg-white/60 bg-clip-text text-transparent absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 uppercase font-bold text-[75px]",
          }}
        >
          diversity
        </Typography>
      </Box>

      <Container maxWidth="lg" className="my-24">
        <Grid container className="max-w-[939px] mx-auto">
          <Grid item xs={5}>
            <Typography variant="p" className="text-[rebeccapurple] font-[Poppins] font-bold text-[40px] leading-[50px]">
              Lifting up others makes you rise
            </Typography>
          </Grid>
          <Grid item xs={7}>
            <Typography component="p" className="text-[rebeccapurple] text-opacity-60 font-[Poppins] text-[21px] leading-[35px]">
              Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt
              sint deserunt ut voluptate aute id deserunt nisi.
            </Typography>
            <Typography component="p" className="text-[rebeccapurple] text-opacity-60 font-[Poppins] text-[21px] leading-[35px]">
              Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt
              sint deserunt ut voluptate aute id deserunt nisi.
            </Typography>
          </Grid>
        </Grid>

        <Stack direction="column" className="my-32" gap={7}>
          <Stack direction="row" gap={2}>
            <Typography className="font-['Passion_One'] flex items-center tracking-[-0.04em] text-[196px] leading-[50px]">“</Typography>
            <Typography component="p" className="font-[Poppins] font-semibold text-[21px] text-[rebeccapurple] text-opacity-60 text-center">
              Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor
            </Typography>
            <Typography className="font-['Passion_One'] flex items-center tracking-[-0.04em] text-[196px] leading-[50px]">’’</Typography>
          </Stack>
          <Stack direction="row" ml="auto" alignItems="center" gap={2}>
            <Image src={leonel} height="68px" width="68px" className="rounded-full" />
            <Stack>
              <Typography className="text-[rebeccapurple] font-bold text-[15px] font-[Poppins] leading-[22.5px] flex items-center">Leonel Zone Yemeli</Typography>
              <Typography className="text-[rebeccapurple] text-opacity-60 font-semibold text-[12px] font-[Poppins] flex items-center text-center">Founder & CEO</Typography>
            </Stack>
          </Stack>
        </Stack>

        <Grid container spacing={6} columns={12} className="max-w-[1038px] mx-auto">
          <Grid xs={4} item>
            <Stack>
              <Typography className="text-center text-[Poppins] text-opacity-60 text-[rebeccapurple] text-[21px] leading-[35px]">
                Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui ess
              </Typography>
              <Typography className="font-['Passion_One'] text-[#2B0A3D] text-[90px] flex items-center mx-auto">160k+</Typography>
            </Stack>
          </Grid>
          <Grid xs={4} item>
            <Stack>
              <Typography className="text-center text-[Poppins] text-opacity-60 text-[rebeccapurple] text-[21px] leading-[35px]">
                Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui ess
              </Typography>
              <Typography className="font-['Passion_One'] text-[#2B0A3D] text-[90px] flex items-center mx-auto">10k+</Typography>
            </Stack>
          </Grid>
          <Grid xs={4} item>
            <Stack>
              <Typography className="text-center text-[Poppins] text-opacity-60 text-[rebeccapurple] text-[21px] leading-[35px]">
                Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui ess
              </Typography>
              <Typography className="font-['Passion_One'] text-[#2B0A3D] text-[90px] flex items-center mx-auto">2k+</Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>

      {/* Team Section starts here */}
      <Box>
        <Stack className="max-w-[100rem] mx-auto">
          <Typography variant="h2" component="h3" className="font-[Poppins] text-[rebeccapurple] text-[40px] font-bold leading-[50px]">
            Meet our <br />
            Stunning Team
          </Typography>
          <Grid container columns={4}>
            <Grid item>
              <Image height="204.5px" width="204.5px" src={leonel} />
            </Grid>
          </Grid>
        </Stack>
      </Box>
      {/* Team section ends here */}

      <Container>
        <Grid container className="max-w-[939px] mx-auto" spacing={15}>
          <Grid item xs={5}>
            <Typography variant="p" className="text-[rebeccapurple] font-[Poppins] font-bold text-[40px] leading-[50px]">
              Join Our Team
            </Typography>
          </Grid>

          <Grid item xs={7}>
            <Typography component="p" className="text-[rebeccapurple] text-opacity-60 font-[Poppins] text-[21px] leading-[35px]">
              Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt
              sint deserunt ut voluptate aute id deserunt nisi.
            </Typography>
            <Button className="bg-transparent border-[rebeccapurple]">Open Positions</Button>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}
