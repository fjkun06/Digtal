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
        wrapperClassName="aspect-square max-h-[auto] tablet:max-h-[204.5px]"
      />
      <Stack>
        <Typography className="font-[Poppins] text-[17px] font-bold text-[rebeccapurple]">
          {name}
        </Typography>
        <Typography className="text-[15px] text-[rebeccapurple]/60">
          {title}
        </Typography>
      </Stack>
    </Box>
  );
}

export default TeamCard;
