import { Grid, styled } from '@mui/material';
import React, { useState } from 'react';
import '@fontsource/gudea';
import sx from '@mui/system/sx';
import ActiveNavLink from './routes/NavLink';
import anglais from './images/uk64.png';
import france from './images/fr64.png';
import german from './images/de64.png';
import german64 from './images/de64.png';
import { Box } from '@mui/system';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import ExpandMoreOutlined from '@mui/icons-material/ExpandMoreOutlined';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
   const [dropdown, setdropdown] = useState('');
   const [language, setlanguage] = useState('/en');
   const [region, setRegion] = useState(anglais)
   const navigate = useNavigate();
   //displaying on arrow hover
   //setting border color to error
   window.onload = () => {
      setdropdown(document.getElementsByClassName('dropdown'));
      // console.log('hello');
      // navigate('/en');
      //   navigate(language);
   };

//    console.log('onSubmit', dropdown);

   // navigation
   //    document.addEventListener('DOMContentLoaded', () => navigate('/en'));

   //    arrow.style.setProperty('--normal-border', errorBorder);

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
               sx={{ backgroundColor: 'white' }}
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
                  sx={{ backgroundColor: 'white' }}
                  alignItems={'center'}
                  justifyContent="end"
                  pl={5}
                  pr={5}>
                  <Gridd item md={1}>
                     <ActiveNavLink to={language} text="Home" />
                  </Gridd>
                  <Gridd item md={1}>
                     <ActiveNavLink to={language + '/enterprise'} text={'Enterprise'} />
                  </Gridd>
                  <Gridd item md={1} sx={{border: '1px solid black'}}>
                     <ActiveNavLink to={language + '/services/'} text="Services" />
                     <ExpandMoreOutlined
                        fontSize="large"
                        className="language-item-sub-arrow"
                        // onMouseEnter={() => (Array.from(dropdown)[0].style.display = 'grid')}
                     />
                  </Gridd>
                  <Gridd item md={1}>
                     <ActiveNavLink to={language + '/contact'} text="Contact" />
                  </Gridd>
                  <Gridd item md={1} className="language-item">
                     {/* <ActiveNavLink to="/en/opo" text="Language" /> */}
                     <Box
                        className="language-item-sub"
                        onMouseLeave={() => (Array.from(dropdown)[0].style.display = 'none')}>
                        <img src={region} alt="france-flag" className="language-image" />
                        <ExpandMoreOutlined
                           fontSize="large"
                           className="language-item-sub-arrow"
                           onMouseEnter={() => (Array.from(dropdown)[0].style.display = 'grid')}
                        />
                        <Box className="language-dropdown dropdown">
                           {/* <Box display={'none'}> */}
                           <Box
                              className="language-dropdown-item"
                              onClick={() => {
                                 setlanguage('/en');
                                 setRegion(anglais);

                                 navigate('/en');
                              }}>
                              <img src={anglais} alt="france-flag" className="language-image" />
                           </Box>
                           <Box
                              className="language-dropdown-item"
                              onClick={() => {
                                 setlanguage('/fr');
                                 setRegion(france);

                                 navigate('/fr');
                              }}>
                              <img src={france} alt="france-flag" className="language-image" />
                           </Box>
                           <Box
                              className="language-dropdown-item"
                              onClick={() => {
                                 setlanguage('/de');
                                 setRegion(german);
                                 navigate('/de');
                              }}>
                              <img src={german} alt="france-flag" className="language-image" />
                           </Box>
                        </Box>
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
