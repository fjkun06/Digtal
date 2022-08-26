import { Box } from '@mui/system';

import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Enterprise() {
  return (
    <>
      {/* <div>Enterprise</div> */}

      <Box className="select-item-sub">
        {/* <Box display={'none'}> */}
        <Box className="select-item-sub-container">
          {/* <Typography variant="h5" className="select-item-dropdown-text"></Typography> */}
          <NavLink to={''} className="select-item-dropdown-text">
            {' '}
            Web Development
          </NavLink>
        </Box>
        <Box className="select-item-sub-container">
          {/* <Typography variant="h5" className="select-item-dropdown-text">
                  Digital Marketing
               </Typography> */}
          <NavLink to={''} className="select-item-dropdown-text">
            {' '}
            Digital Marketing
          </NavLink>
        </Box>
        <Box className="select-item-sub-container">
          {/* <Typography variant="h5" className="select-item-dropdown-text"> */}
          {/* <Typography variant="h6" className="select-item-dropdown-text" fontFamily={['Roboto', 'Helvetica Neue', 'Helvetica']}> */}
          {/* Consulting */}
          {/* </Typography> */}
          <NavLink to={''} className="select-item-dropdown-text">
            {' '}
            Consulting
          </NavLink>
        </Box>
      </Box>
    </>
  );
}
