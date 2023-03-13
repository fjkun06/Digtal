import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "mui-image";
import React from "react";

function TeamCard({ image, name, title }) {
  return (
    <Box className="p-2 flex flex-col items-stretch">
      <Image
        src={image}
        className=""
        height="auto"
        width="auto"
        wrapperClassName="aspect-square max-h-[auto] w-full"
      />
      <Stack>
        <Typography className="font-[Poppins] text-[15px] font-bold md:text-[16px]">
          <mark className="bg-rebecca-blue/10 text-rebecca-blue">
          {name}
          </mark>
        </Typography>
        <Typography className="text-[13px] tablet:text-[15px]">
          <mark className="bg-rebecca-blue/10 text-rebecca-white/60">
          {title}
          </mark>
        </Typography>
      </Stack>
    </Box>
  );
}

export default TeamCard;
