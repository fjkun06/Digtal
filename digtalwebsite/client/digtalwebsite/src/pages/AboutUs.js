import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import diversity from "src/assets/images/diversity.png";
import leonel from "src/assets/images/leonel.png";
import xevlyn from "src/assets/images/xevlyn.png";
import fj from "src/assets/images/fj.png";
import nesta from "src/assets/images/nesta.png";

import { Image } from "mui-image";
import TeamCard from "src/components/about/TeamCard";
import { useTranslation } from "react-i18next";
import flower from "src/assets/svg/flower.svg";

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
  const { t } = useTranslation("about");
  return (
    <Grid className="about bg-white/50">
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        className="h-screen gap-8 laptop:gap-0 [&>*]:font-['Poppins']"
      >
        <Typography
          className="caption"
          dangerouslySetInnerHTML={{ __html: t("caption.primary") }}
        />
        <Typography className="font-[Poppins] text-3xl font-bold capitalize leading-[auto] tracking-normal text-[color:rebeccapurple] laptop:text-[62px] laptop:leading-[70px]">
          {t("caption.secondary")}
        </Typography>
      </Stack>

      <Box className="relative h-auto overflow-hidden laptop:h-[70vh]">
        <img
          src={flower}
          className="absolute -top-[15%] -left-[8vw] z-[1] w-[30vw] opacity-40"
          alt="Diversity flower"
        />
        <Image
          src={diversity}
          className="aspect-video object-contain object-center md:object-cover"
        />
        <Typography
          variant="h3"
          classes={{
            root: "bg-white/60 bg-clip-text text-transparent absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 uppercase font-bold text-2xl tablet:text-[70px] leading-[70px] laptop:text-[75px] tracking-[.9rem] laptop:leading-[70px] laptop:tracking-[3rem] font-['Poppins_700']"
          }}
        >
          diversity
        </Typography>
        <img
          src={flower}
          className="absolute -bottom-[15%] -right-[8vw] z-[1] w-[30vw] opacity-40"
          alt="Diversity flower"
        />
      </Box>

      <Container maxWidth="lg" className="my-24 space-y-24">
        <Box className="mx-auto grid grid-cols-12 tablet:max-w-screen-tablet laptop:max-w-screen-laptop">
          <Box className="col-span-12 tablet:col-span-5 laptop:col-span-5">
            <Typography
              component="p"
              className="mx-20 text-center font-[Poppins] text-[18px] font-bold leading-[35px] text-[rebeccapurple] tablet:text-[20px] laptop:text-left laptop:text-[24px] laptop:leading-[50px]"
            >
              Lifting up others makes you rise
            </Typography>
          </Box>
          <Box className="col-span-12 tablet:col-span-7 tablet:space-y-8 laptop:col-span-7">
            <Typography
              component="p"
              className="mt-8 text-center font-[Poppins] text-[13px] leading-[23px] text-[rebeccapurple] text-opacity-60 tablet:text-left laptop:mt-0 laptop:text-left laptop:text-[21px] laptop:leading-[35px]"
            >
              Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt
              qui esse pariatur duis deserunt mollit dolore cillum minim tempor
              enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut
              voluptate aute id deserunt nisi.
            </Typography>
            <Typography
              component="p"
              className="mt-8 text-center font-[Poppins] text-[13px] leading-[23px] text-[rebeccapurple] text-opacity-60 tablet:text-left laptop:mt-0 laptop:text-left laptop:text-[21px] laptop:leading-[35px]"
            >
              Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt
              qui esse pariatur duis deserunt mollit dolore cillum minim tempor
              enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut
              voluptate aute id deserunt nisi.
            </Typography>
          </Box>
        </Box>

        <Stack
          direction="column"
          className="mx-auto gap-10 tablet:max-w-[550px] laptop:max-w-none laptop:gap-12"
        >
          <Stack className="flex-row items-start gap-1 laptop:gap-4">
            <Typography className="flex items-center font-['Passion_One'] text-[100px] leading-[50px] tracking-[-0.04em] laptop:text-[130px]">
              “
            </Typography>
            <Typography
              component="p"
              className="text-center font-[Poppins] text-[12px] font-semibold leading-[25px] text-[rebeccapurple] text-opacity-60 laptop:text-[21px]"
            >
              Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt
              qui esse pariatur duis deserunt mollit dolore cillum minim tempor
              enim. Elit aute irure tempor
            </Typography>
            <Typography className="flex items-center font-['Passion_One'] text-[100px] leading-[50px] tracking-[-0.04em] laptop:text-[130px]">
              ’’
            </Typography>
          </Stack>
          <Stack className="flex-row items-center gap-4 self-center tablet:self-end laptop:gap-6">
            <Image
              src={leonel}
              className="aspect-square !w-14 rounded-full tablet:!w-16"
              wrapperClassName="flex-shrink !w-auto"
            />
            <Stack className="flex-grow">
              <Typography className="font-[Poppins] text-[15px] font-bold leading-[22.5px] text-[rebeccapurple]">
                Leonel Zone Yemeli
              </Typography>
              <Typography className="font-[Poppins] text-[12px] font-semibold text-[rebeccapurple] text-opacity-60">
                Founder & CEO
              </Typography>
            </Stack>
          </Stack>
        </Stack>

        <Box className="mx-auto gap-8 laptop:max-w-[1038px] laptop:gap-14">
          <Box className="grid grid-cols-12 gap-8">
            <Box className="col-span-6 laptop:col-span-4">
              <Stack className="gap-6">
                <Typography className="text-center text-[13px] leading-[20px] text-[Poppins] text-[rebeccapurple] text-opacity-60 laptop:text-[21px] laptop:leading-[35px]">
                  Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
                  Sunt qui ess
                </Typography>
                <Typography className="mx-auto flex items-center font-['Passion_One'] text-[50px] leading-[50px] text-[#2B0A3D] laptop:text-[90px]">
                  160k+
                </Typography>
              </Stack>
            </Box>
            <Box className="col-span-6 laptop:col-span-4">
              <Stack className="gap-6">
                <Typography className="text-center text-[13px] leading-[20px] text-[Poppins] text-[rebeccapurple] text-opacity-60 laptop:text-[21px] laptop:leading-[35px]">
                  Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
                  Sunt qui ess
                </Typography>
                <Typography className="mx-auto flex items-center font-['Passion_One'] text-[50px] leading-[50px] text-[#2B0A3D] laptop:text-[90px]">
                  10k+
                </Typography>
              </Stack>
            </Box>
            <Box className="col-span-6 col-start-4 laptop:col-span-4 laptop:col-start-9">
              <Stack className="gap-6">
                <Typography className="text-center text-[13px] leading-[20px] text-[Poppins] text-[rebeccapurple] text-opacity-60 laptop:text-[21px] laptop:leading-[35px]">
                  Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
                  Sunt qui ess
                </Typography>
                <Typography className="mx-auto flex items-center font-['Passion_One'] text-[50px] leading-[50px] text-[#2B0A3D] laptop:text-[90px]">
                  2k+
                </Typography>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Container>

      {/* Team Section starts here */}
      <Box className="bg-[rebeccapurple]/40">
        <Stack className="container mx-auto gap-12 laptop:gap-24">
          <Typography
            variant="h2"
            component="h3"
            className="px-[6.5rem] text-center font-[Poppins] text-[27px] font-bold leading-[35px] tracking-[0] text-[rebeccapurple] laptop:text-left laptop:text-[40px] laptop:leading-[50px]"
          >
            Meet our <br />
            Stunning Team
          </Typography>
          <Box className="mx-auto grid grid-cols-2 gap-8 py-14 px-12 md:max-w-screen-md md:grid-cols-3 md:px-0 laptop:grid-cols-4 laptop:gap-12">
            {team.map((member, index) => (
              <TeamCard
                key={index}
                image={member.image}
                name={member.name}
                title={member.title}
              />
            ))}
          </Box>
        </Stack>
      </Box>
      {/* Team section ends here */}

      {/* Join our team section */}
      <Box>
        <Box className="mx-auto grid h-auto max-w-[1068px] grid-cols-12 py-14">
          <Box className="col-span-12 laptop:col-span-4">
            <Typography
              component="p"
              className="text-center font-[Poppins] text-[27px] font-bold leading-[70px] text-[rebeccapurple] laptop:text-left laptop:text-[40px]"
            >
              Join our team
            </Typography>
          </Box>

          <Box className="col-span-12 px-8 laptop:col-span-8 laptop:px-0">
            <Stack>
              <Typography
                component="p"
                className="text-center font-[Poppins] text-[13px] leading-[23px] text-[rebeccapurple] text-opacity-60 laptop:text-left laptop:text-[20px] laptop:leading-[35px]"
              >
                Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
                Sunt qui esse pariatur duis deserunt mollit dolore cillum minim
                tempor enim. Elit aute irure tempor cupidatat incididunt sint
                deserunt ut voluptate aute id deserunt nisi.
              </Typography>
              <Button className="col-span-1 mx-auto mt-4 box-border border-2 border-solid border-[rebeccapurple] bg-transparent px-4 py-2 text-[17px] font-bold capitalize text-[rebeccapurple] hover:border-[rebeccapurple]/10 hover:bg-[rebeccapurple]/20 laptop:ml-0">
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
