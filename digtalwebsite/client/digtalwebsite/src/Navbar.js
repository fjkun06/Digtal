import { Grid, styled } from '@mui/material';
import React from 'react';
import '@fontsource/gudea';
import sx from '@mui/system/sx';
import ActiveNavLink from './routes/NavLink';
import anglais from './images/uk32.png';
import france from './images/fr32.png';
import german from './images/de32.png';
import german64 from './images/de64.png';
import { Box } from '@mui/system';

export default function Navbar() {
   const Gridd = styled(Grid)(
      sx({
         fontFamily: 'Gudea',
         fontSize: '1.5rem',
        //  border: '1px solid black',
         textAlign: 'center',
         display: 'block'
      })
   );
    
   return (
      <>
         <Grid
            component={'nav'}
            container
            alignItems={'center'}
            // justifyContent="center"
            // justifyContent="center"
            direction="row"
            sx={{
               border: '1px solid black',
               //    padding: '2px',
               backgroundColor: 'red',
               fontFamily: 'Gudea'
            }}>
            <Grid
               item
               container
               sx={{ backgroundColor: 'yellow', display: 'none' }}
               //    pt={1}
               //    pb={1}
               alignItems={'center'}
               //    columnSpacing={19}
               justifyContent="space-between">
               <Grid item justifyContent="space-between" md={3}>
                  <Gridd item>Logo</Gridd>
               </Grid>
               <Grid
                  md={9}
                  container
                  item
                  //    columnSpacing={2}
                  sx={{ backgroundColor: 'red', display: 'none' }}
                  alignItems={'start'}
                  justifyContent="end"
                  pl={5}
                  pr={5}>
                  <Gridd item md={1}>
                     <ActiveNavLink to="/" text="Home" />
                  </Gridd>
                  <Gridd item md={1}>
                     <ActiveNavLink to="/en/enterprise" text={'Enterprise'} />
                  </Gridd>
                  <Gridd item md={1}>
                     <ActiveNavLink to="/en/services" text="Services" />
                  </Gridd>
                  <Gridd item md={1}>
                     <ActiveNavLink to="/en/contact" text="Contact" />
                  </Gridd>
                  <Gridd item md={1} className="language-item">
                     {/* <ActiveNavLink to="/en/opo" text="Language" /> */}
                     <Box sx={{ border: '1px solid black', textAlign: 'left', p: 0 }}>
                        <img src={german64} alt="france-flag" className="language-image" />
                     </Box>
                  </Gridd>
               </Grid>
            </Grid>
         </Grid>
      </>
   );
}
// import * as React from 'react';
// import { NavLink } from 'react-router-dom';

// export function NavList() {
//    // This styling will be applied to a <NavLink> when the
//    // route that it links to is currently selected.
//    let activeStyle = {
//       textDecoration: 'underline'
//    };

//    let activeClassName = 'underline';

//    return (
//       <nav>
//          <ul>
//             <li>
//                <NavLink
//                   to="messages"
//                   style={({ isActive }) => (isActive ? activeStyle : undefined)}>
//                   Messages
//                </NavLink>
//             </li>
//             <li>
//                <NavLink
//                   to="tasks"
//                   className={({ isActive }) => (isActive ? activeClassName : undefined)}>
//                   Tasks
//                </NavLink>
//             </li>
//             <li>
//                <NavLink to="tasks">
//                   {({ isActive }) => (
//                      <span className={isActive ? activeClassName : undefined}>Tasks</span>
//                   )}
//                </NavLink>
//             </li>
//          </ul>
//       </nav>
//    );
// }