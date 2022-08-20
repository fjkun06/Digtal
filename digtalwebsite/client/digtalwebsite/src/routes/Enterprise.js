import { Box } from '@mui/system';
import anglais from '../images/uk64.png';
import france from '../images/fr64.png';
import german from '../images/de64.png';

import React from 'react'
import { Typography } from '@mui/material';

export default function Enterprise() {
  return (
     <>
        {/* <div>Enterprise</div> */}

        <Box className="select-item-sub">
           {/* <Box display={'none'}> */}
           <Box className="lselect-item-sub-container">
              <Typography className="select-item-dropdown-text">Enterprise</Typography>
           </Box>
           <Box className="lselect-item-sub-container">
              <Typography className="select-item-dropdown-text">Enterprise</Typography>
           </Box>
           <Box className="lselect-item-sub-container">
              <Typography className="select-item-dropdown-text">Enterprise</Typography>
           </Box>
           <Box className="lselect-item-sub-container">
              <Typography className="select-item-dropdown-text">Enterprise</Typography>
           </Box>
        </Box>
     </>
  );
  
}
