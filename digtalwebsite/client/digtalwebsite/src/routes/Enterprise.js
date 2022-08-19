import { Box } from '@mui/system';
import anglais from '../images/uk16.png';
import france from '../images/fr16.png';
import german from '../images/de16.png';

import React from 'react'

export default function Enterprise() {
  return (
     <>
        <div>Enterprise</div>

        <Box className="language-dropdown">
           {/* <Box display={'none'}> */}
           <Box className="language-dropdown-item">
              <img
                 sx={{ width: '50px' }}
                 height="50px"
                 src={anglais}
                 alt="france-flag"
                 className="language-image"
              />
           </Box>
           <Box className="language-dropdown-item">
              <img
                 sx={{ width: '50px' }}
                 height="50px"
                 src={france}
                 alt="france-flag"
                 className="language-image"
              />
           </Box>
           <Box className="language-dropdown-item">
              <img
                 sx={{ width: '50px' }}
                 height="50px"
                 src={german}
                 alt="france-flag"
                 className="language-image"
              />
           </Box>
        </Box>
     </>
  );
  
}
