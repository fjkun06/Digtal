import { Box } from '@mui/system';
import anglais from '../images/uk64.png';
import france from '../images/fr64.png';
import german from '../images/de64.png';

import React from 'react'

export default function Enterprise() {
  return (
     <>
        {/* <div>Enterprise</div> */}

        <Box className="language-dropdown">
           {/* <Box display={'none'}> */}
           <Box className="language-dropdown-item">
              <img
                 src={anglais}
                 alt="france-flag"
                 className="language-image"
              />
           </Box>
           <Box className="language-dropdown-item">
              <img
                 src={france}
                 alt="france-flag"
                 className="language-image"
              />
           </Box>
           <Box className="language-dropdown-item">
              <img
                 src={german}
                 alt="france-flag"
                 className="language-image"
              />
           </Box>
        </Box>
     </>
  );
  
}
