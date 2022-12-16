import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "mui-image";
import React from "react";

function TeamCard({ image, name, title }) {
  return (
    <Box className="p-2">
      <Image
        src={image}
        className=""
        height="auto"
        width="auto"
        wrapperClassName="aspect-square max-h-[auto] lg:max-h-[204.5px]"
      />
      <Stack>
        <Typography className="text-[rebeccapurple] text-[17px] font-bold font-[Poppins]">
          {name}
        </Typography>
        <Typography className="text-[rebeccapurple]/60 text-[15px]">
          {title}
        </Typography>
      </Stack>
    </Box>
  );
}

export default TeamCard;
