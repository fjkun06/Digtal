import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import diversity from "@assets/images/diversity.png";
import leonel from "@assets/images/leonel.png";
import xevlyn from "@assets/images/xevlyn.png";
import fj from "@assets/images/fj.png";
import nesta from "@assets/images/nesta.png";
import { Image } from "mui-image";
import TeamCard from "src/components/about/TeamCard";

const team = [
  { name: "Yemeli Zone Leonel", title: "Founder & CEO", image: leonel },
  {
    name: "Ndob'Ewang Xevlyn",
    title: "Cloud & DevOps Engineer",
    image: xevlyn
  },
  { name: "Frank Zone Jordan", title: "Fullstack Developer", image: fj },
  { name: "Nesta Enow", title: "UI/UX Designer", image: nesta },
  { name: "Yemeli Zone Leonel", title: "Founder & CEO", image: leonel },
  { name: "Yemeli Zone Leonel", title: "Founder & CEO", image: leonel },
  { name: "Yemeli Zone Leonel", title: "Founder & CEO", image: leonel },
  { name: "Yemeli Zone Leonel", title: "Founder & CEO", image: leonel }
];

export default function AboutUs() {
  return (
    <Grid mt={10} columns={1} className="about">
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        className="h-screen [&>*]:font-['Poppins'] gap-8   lg:gap-0"
      >
        <Typography className="caption">
          We are professionals
          <br /> Bringing to you a.
        </Typography>
        <Typography className="capitalize font-bold text-3xl lg:text-[62px] text-[color:rebeccapurple]">
          Diversity of Solution
        </Typography>
      </Stack>

      <Box className="h-auto lg:h-[70vh] relative">
        <Image src={diversity} className="aspect-video" />
        <Typography
          variant="h3"
          classes={{
            root: "bg-white/60 bg-clip-text text-transparent absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 uppercase font-bold text-2xl lg:text-[75px] tracking-[.5rem] lg:tracking-[5rem]"
          }}
        >
          diversity
        </Typography>
      </Box>

      <Container maxWidth="lg" className="my-24">
        {/* <Box className="max-w-[939px] mx-auto">

        </Box> */}
        <Grid container className="">
          <Grid item xs={12} lg={5}>
            <Typography
              component="p"
              className="text-[rebeccapurple] font-[Poppins] mx-20 lg:mx-0 text-center lg:text-left font-bold text-[27px] leading-[35px] lg:text-[40px] lg:leading-[50px]"
            >
              Lifting up others makes you rise
            </Typography>
          </Grid>
          <Grid item xs={12} lg={7}>
            <Typography
              component="p"
              className="text-[rebeccapurple] text-opacity-60 font-[Poppins] lg:text-[21px] leading-[23px] text-[13px] lg:leading-[35px] mt-8 lg:mt-0 text-center lg:text-left"
            >
              Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt
              qui esse pariatur duis deserunt mollit dolore cillum minim tempor
              enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut
              voluptate aute id deserunt nisi.
            </Typography>
            <Typography
              component="p"
              className="text-[rebeccapurple] text-opacity-60 font-[Poppins] lg:text-[21px] leading-[23px] text-[13px] lg:leading-[35px] mt-8 lg:mt-0 text-center lg:text-left"
            >
              Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt
              qui esse pariatur duis deserunt mollit dolore cillum minim tempor
              enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut
              voluptate aute id deserunt nisi.
            </Typography>
          </Grid>
        </Grid>

        <Stack direction="column" className="my-32" gap={7}>
          <Stack direction="row" gap={2} className="items-start">
            <Typography className="font-['Passion_One'] flex items-center tracking-[-0.04em] lg:text-[196px] text-[130px] leading-[50px]">
              “
            </Typography>
            <Typography
              component="p"
              className="font-[Poppins] font-semibold text-[13px] lg:text-[21px] leading-[25px] text-[rebeccapurple] text-opacity-60 text-center"
            >
              Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt
              qui esse pariatur duis deserunt mollit dolore cillum minim tempor
              enim. Elit aute irure tempor
            </Typography>
            <Typography className="font-['Passion_One'] flex items-center tracking-[-0.04em] lg:text-[196px] text-[130px] leading-[50px]">
              ’’
            </Typography>
          </Stack>
          <Stack
            direction="row"
            alignItems="center"
            gap={2}
            className="self-center lg:self-end"
          >
            <Image
              src={leonel}
              height="68px"
              width="68px"
              className="rounded-full"
            />
            <Stack>
              <Typography className="text-[rebeccapurple] font-bold text-[15px] font-[Poppins] leading-[22.5px] flex items-center">
                Leonel Zone Yemeli
              </Typography>
              <Typography className="text-[rebeccapurple] text-opacity-60 font-semibold text-[12px] font-[Poppins] flex items-center text-center">
                Founder & CEO
              </Typography>
            </Stack>
          </Stack>
        </Stack>

        <Box className="lg:max-w-[1038px] mx-auto gap-8 lg:gap-14">
          <Box className="grid grid-cols-12 gap-8">
            <Box className="col-span-6 lg:col-span-4">
              <Stack className="gap-6">
                <Typography className="text-center text-[Poppins] text-opacity-60 text-[rebeccapurple] text-[13px] leading-[20px] lg:text-[21px] lg:leading-[35px]">
                  Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
                  Sunt qui ess
                </Typography>
                <Typography className="font-['Passion_One'] text-[#2B0A3D] text-[50px] lg:text-[90px] leading-[50px] flex items-center mx-auto">
                  160k+
                </Typography>
              </Stack>
            </Box>
            <Box className="col-span-6 lg:col-span-4">
              <Stack className="gap-6">
                <Typography className="text-center text-[Poppins] text-opacity-60 text-[rebeccapurple] text-[13px] leading-[20px] lg:text-[21px] lg:leading-[35px]">
                  Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
                  Sunt qui ess
                </Typography>
                <Typography className="font-['Passion_One'] text-[#2B0A3D] text-[50px] lg:text-[90px] leading-[50px] flex items-center mx-auto">
                  10k+
                </Typography>
              </Stack>
            </Box>
            <Box className="col-span-6 col-start-4 lg:col-start-9 lg:col-span-4">
              <Stack className="gap-6">
                <Typography className="text-center text-[Poppins] text-opacity-60 text-[rebeccapurple] text-[13px] leading-[20px] lg:text-[21px] lg:leading-[35px]">
                  Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
                  Sunt qui ess
                </Typography>
                <Typography className="font-['Passion_One'] text-[#2B0A3D] text-[50px] lg:text-[90px] leading-[50px] flex items-center mx-auto">
                  2k+
                </Typography>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Container>

      {/* Team Section starts here */}
      <Box>
        <Stack className="gap-12 lg:gap-24 mx-auto">
          <Typography
            variant="h2"
            component="h3"
            className="font-[Poppins] text-[rebeccapurple] text-center text-[27px] leading-[35px] tracking-[0] lg:text-left lg:text-[40px] font-bold lg:leading-[50px] px-[6.5rem]"
          >
            Meet our <br />
            Stunning Team
          </Typography>
          <Box className="bg-[rebeccapurple]/10">
            <Box className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 place-content-center py-14 px-12 lg:px-0 mx-auto max-w-[1068px]">
              {team.map(member => (
                <TeamCard
                  key={member.name}
                  image={member.image}
                  name={member.name}
                  title={member.title}
                />
              ))}
            </Box>
          </Box>
        </Stack>
      </Box>
      {/* Team section ends here */}

      {/* Join our team section */}
      <Box>
        <Box className="grid grid-cols-12 mx-auto max-w-[1068px] h-auto py-14 mb-20">
          <Box className="col-span-12 lg:col-span-4">
            <Typography
              component="p"
              className="text-[rebeccapurple] font-[Poppins] font-bold text-center lg:text-left lg:text-[40px] text-[27px] leading-[70px]"
            >
              Join our team
            </Typography>
          </Box>

          <Box className="col-span-12 px-8 lg:px-0 lg:col-span-8">
            <Stack>
              <Typography
                component="p"
                className="text-[rebeccapurple] text-opacity-60 font-[Poppins] text-[13px] leading-[23px] text-center lg:text-left lg:text-[20px] lg:leading-[35px]"
              >
                Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
                Sunt qui esse pariatur duis deserunt mollit dolore cillum minim
                tempor enim. Elit aute irure tempor cupidatat incididunt sint
                deserunt ut voluptate aute id deserunt nisi.
              </Typography>
              <Button className="bg-transparent border-2 border-solid border-[rebeccapurple] col-span-1 px-4 py-2 mt-4 hover:border-[rebeccapurple]/10 hover:bg-[rebeccapurple]/20 text-[17px] capitalize font-bold box-border mx-auto lg:ml-0 text-[rebeccapurple]">
                Open Positions
              </Button>
            </Stack>
          </Box>
        </Box>
      </Box>
      {/* Join out team section ends here */}
    </Grid>
  );
}
