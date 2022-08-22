import { Grid, styled, useMediaQuery } from '@mui/material';
import React, { useState } from 'react';
import '@fontsource/gudea';
import sx from '@mui/system/sx';
import ActiveNavLink from './routes/NavLink';
import anglais from './images/uk64.png';
import france from './images/fr64.png';
import german from './images/de64.png';
import logo from './images/logo.png';
// import german64 from './images/de64.png';
import { Box, createTheme, ThemeProvider } from '@mui/system';
// import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import ExpandMoreOutlined from '@mui/icons-material/ExpandMoreOutlined';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import languageSwitcher from './i18n/languageSwitcher';
import { useTranslation } from 'react-i18next';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import MobileActiveNavLink from './routes/MobileNavLink';

export default function Navbar() {
   const [dropdown, setdropdown] = useState('');
   const [servicesDropdown, setServicesDropdown] = useState('');
   const [mobileServicesDropdown, setMobileServicesDropdown] = useState('');
   const [mobileSpecial, setMobileSpecial] = useState('');
   const [mobileNavbarReveal, setMobileNavbarReveal] = useState('');
   const [mobileCross, setMobileCross] = useState('')
   const [mobileMenu, setMobileMenu] = useState('')
   const [specialLanguage, setspecialLanguage] = useState('')


   const [language, setLanguage] = useState('/en');
   // const [language, setlanguage] = useState('/en');
   const [region, setRegion] = useState(anglais);
   const navigate = useNavigate();
   //displaying on arrow hover
   //setting border color to error
   window.onload = () => {
      setdropdown(document.getElementsByClassName('lang-dropdown'));
      setServicesDropdown(document.getElementsByClassName('services-dropdown'));
      setMobileServicesDropdown(document.getElementsByClassName('mobile-services-dropdown'));
      setMobileSpecial(document.getElementsByClassName('special-navbar-item'));
      setMobileNavbarReveal(document.getElementsByClassName('mobile-navbar-reveal'));
      setMobileCross(document.getElementsByClassName('mobile-navbar-cross'));
      setMobileMenu(document.getElementsByClassName('mobile-navbar-menu'));
      setspecialLanguage(document.getElementsByClassName('special-language'));

      
      // console.log('hello');
      // navigate('/en/home');
      navigate(language + '/home');
   };

   //language settings
   const { t, i18n, ready } = useTranslation(['navbar', 'form']);
   let location = useLocation();

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

   //theme
   const theme = createTheme({
      breakpoints: {
         values: {
            xs: 0,
            sm: 600,
            md: 900,
            bs: 768,
            w793: 796,
            w893: 893,
            lg: 1200,
            xl: 1536
         }
      }
   });

   //media query
   const max767 = useMediaQuery('(max-width:767px)');

   return (
      <>
         <ThemeProvider theme={theme}>
            <Grid
               component={'nav'}
               container
               alignItems={'center'}
               // justifyContent="center"
               // justifyContent="center"
               direction="row"
               sx={{
                  borderBottom: '1px solid black',
                  //    padding: '2px',
                  // backgroundColor: 'red',
                  fontFamily: 'Gudea'
               }}>
               <Grid
                  item
                  container
                  sx={{ backgroundColor: 'white' }}
                  pt={2}
                  pb={2}
                  alignItems={'center'}
                  //    columnSpacing={19}
                  justifyContent="space-between">
                  <Grid item justifyContent="flex-start" bs={3} md={3} xs={3}>
                     <Gridd item sx={{ width: '60%' }}>
                        <img src={logo} alt="Digtal Logo" className="logo" />
                     </Gridd>
                  </Grid>

                  {/* handburger menu */}
                  <Grid
                     item
                     sx={{
                        backgroundColor: 'transparent',
                        height: '7rem',
                        justifyContent: 'end',
                        zIndex: 99,
                        position: 'relative'
                        // border: '1px solid red'
                     }}
                     display={{ xs: 'grid', bs: 'none' }}
                     xs={9}
                     pr={4}
                     pt={1}>
                     <MenuRoundedIcon
                        sx={{
                           fontSize: '4rem',
                           '&:hover': { cursor: 'pointer' }
                           // display: 'none'
                        }}
                        className="mobile-navbar-menu"
                        onClick={() => {
                           Array.from(mobileNavbarReveal)[0].style.display = 'grid';
                           Array.from(mobileCross)[0].style.display = 'block';
                           Array.from(mobileMenu)[0].style.display = 'none';
                        }}
                     />

                     <CloseTwoToneIcon
                        sx={{
                           fontSize: '4rem',
                           color: 'white',
                           '&:hover': { cursor: 'pointer' },
                           display: 'none'
                        }}
                        className="mobile-navbar-cross"
                        onClick={() => {
                           setTimeout(() => {
                              Array.from(mobileNavbarReveal)[0].style.display = 'none';
                              Array.from(mobileCross)[0].style.display = 'none';
                              Array.from(mobileMenu)[0].style.display = 'block';
                           }, 50);
                        }}
                     />

                     <Grid className="mobile-nav-bar mobile-navbar-reveal">
                        <Grid item className="mobile-nav-bar-item">
                           <MobileActiveNavLink to={language + '/home'} text={t('home')} />
                        </Grid>
                        <Grid item className="mobile-nav-bar-item">
                           <MobileActiveNavLink
                              to={language + '/enterprise'}
                              text={t('enterprise')}
                           />
                        </Grid>
                        <Grid
                           item
                           className="mobile-nav-bar-item"
                           onClick={() => {
                              if (
                                 Array.from(mobileServicesDropdown)[0].style.display === 'block' &&
                                 Array.from(mobileSpecial)[0].style.display === 'block'
                              ) {
                                 Array.from(mobileServicesDropdown)[0].style.display = 'none';
                                 Array.from(mobileSpecial)[0].style.display = 'none';
                              } else {
                                 Array.from(mobileServicesDropdown)[0].style.display = 'block';
                                 Array.from(mobileSpecial)[0].style.display = 'block';
                              }
                           }}>
                           <MobileActiveNavLink to={language + '/services/'} text={t('services')} />
                           <ExpandMoreOutlined
                              sx={{ fontSize: 24 }}
                              className="select-item-sub-arrow"
                              // onMouseEnter={() => {
                              //    Array.from(mobileSpecial)[0].style.display = 'block';
                              //    Array.from(mobileServicesDropdown)[0].style.display = 'block';
                              // }}
                           />
                        </Grid>
                        <Grid item className="mobile-nav-bar-item special-navbar-item">
                           {/* <MobileActiveNavLink to={language + '/contact'} text={t('contact')} /> */}
                           <Box className="select-item-sub mobile-services-dropdown">
                              {/* <Box display={'none'}> */}
                              <Box className="select-item-sub-container">
                                 {/* <Typography variant="h5" className="select-item-dropdown-text"></Typography> */}
                                 <NavLink
                                    to={language + '/services/web-development'}
                                    className="select-item-dropdown-text">
                                    {' '}
                                    {/* Web Development */}
                                    {t('subject.op2', { ns: 'form' })}
                                 </NavLink>
                              </Box>
                              <Box className="select-item-sub-container">
                                 {/* <Typography variant="h5" className="select-item-dropdown-text">
                  Digital Marketing
               </Typography> */}
                                 <NavLink
                                    to={language + '/services/digital-marketing'}
                                    className="select-item-dropdown-text">
                                    {' '}
                                    {t('subject.op3', { ns: 'form' })}
                                 </NavLink>
                              </Box>
                              <Box className="select-item-sub-container">
                                 {/* <Typography variant="h5" className="select-item-dropdown-text"> */}
                                 {/* <Typography variant="h6" className="select-item-dropdown-text" fontFamily={['Roboto', 'Helvetica Neue', 'Helvetica']}> */}
                                 {/* Consulting */}
                                 {/* </Typography> */}
                                 <NavLink
                                    to={language + '/services/consulting'}
                                    className="select-item-dropdown-text">
                                    {' '}
                                    {t('subject.op4', { ns: 'form' })}
                                 </NavLink>
                              </Box>
                           </Box>
                        </Grid>
                        <Grid item className="mobile-nav-bar-item">
                           <MobileActiveNavLink to={language + '/contact'} text={t('contact')} />
                        </Grid>
                        <Grid
                           item
                           className="mobile-nav-bar-item"
                           onClick={() => {
                              if (
                                 Array.from(specialLanguage)[0].style.display === 'grid' 
                              ) {
                                 Array.from(specialLanguage)[0].style.display = 'none';
                              } else {
                                 Array.from(specialLanguage)[0].style.display = 'grid';
                              }
                           }}>
                           <img src={region} alt="france-flag" className="language-image" />
                           <ExpandMoreOutlined
                              // fontSize={40}
                              sx={{ fontSize: 24 }}
                              className="lselect-item-sub-arrow"
                              // onMouseEnter={() => (Array.from(dropdown)[0].style.display = 'grid')}
                           />
                        </Grid>
                        <Grid item className="mobile-nav-bar-item special-language">
                           <Box className="language-dropdown">
                              {/* <Box display={'none'}> */}
                              <Box
                                 className="language-dropdown-item"
                                 onClick={function () {
                                    if (language === '/en') {
                                       console.log('en already');
                                    } else {
                                       setLanguage('/en');
                                       setRegion(anglais);
                                       setTimeout(() => navigate('/en/home'), 300);
                                       languageSwitcher('/en');
                                       console.log('lang: ', location, 'mang: ', location.pathname);
                                    }
                                 }}>
                                 <img src={anglais} alt="britain-flag" className="language-image" />
                              </Box>
                              <Box
                                 className="language-dropdown-item"
                                 onClick={function () {
                                    if (language === '/fr') {
                                       console.log('fr already');
                                    } else {
                                       setLanguage('/fr');
                                       setRegion(france);
                                       setTimeout(() => navigate('/fr/home'), 300);
                                       languageSwitcher('/fr');
                                       console.log('lang: ', language);
                                    }
                                 }}>
                                 <img src={france} alt="france-flag" className="language-image" />
                              </Box>
                              <Box
                                 className="language-dropdown-item"
                                 onClick={function () {
                                    if (language === '/de') {
                                       console.log('de already');
                                    } else {
                                       setLanguage('/de');
                                       setRegion(german);
                                       setTimeout(() => navigate('/de/home'), 300);
                                       languageSwitcher('/de');
                                       console.log('lang: ', language);
                                    }
                                 }}>
                                 <img src={german} alt="german-flag" className="language-image" />
                              </Box>
                           </Box>
                        </Grid>
                     </Grid>
                  </Grid>

                  <Grid
                     md={9}
                     sm={4}
                     bs={9}
                     container
                     item
                     sx={{ display: max767 ? 'none' : '' }}
                     // display={{ xs:'none',bs:'flexbox'}}
                     // columnGap={1}
                     //    columnSpacing={2}
                     // sx={{ backgroundColor: 'yellow' }}
                     // sx={{ backgroundColor: 'white' }}
                     alignItems={'center'}
                     justifyContent="end"
                     columnGap={{ bs: 3, w893: 5 }}
                     pl={5}
                     pr={5}>
                     <Gridd
                        item
                        // md={1}
                        md={location.pathname === '/de/' ? 0.5 : 1}
                        // md={0.7}
                        sx={{
                           // border: '1px solid black'
                        }}>
                        <ActiveNavLink to={language + '/home'} text={t('home')} />
                     </Gridd>
                     <Gridd
                        item
                        // md={{ language } === '/de' ? 1.5 : 1.3}
                        md={location.pathname === '/de/' ? 1.5 : 2}
                        lg={location.pathname === '/de/' ? 1.5 : 1.5}
                        // md={1.5}
                        sx={{
                           // border: '1px solid black'
                        }}>
                        <ActiveNavLink to={language + '/enterprise'} text={t('enterprise')} />
                     </Gridd>
                     <Gridd
                        item
                        // sx={{ border: '1px solid black' }}
                        md={location.pathname === '/de/home' ? 1.7 : 1.3}
                        sm={2}
                        // md={1.5}
                        // md={1}
                        className="select-item">
                        <Box
                           className="select-item-dropdown"
                           onMouseLeave={() =>
                              (Array.from(servicesDropdown)[0].style.display = 'none')
                           }>
                           <ActiveNavLink to={language + '/services/'} text={t('services')} />
                           <ExpandMoreOutlined
                              fontSize="large"
                              className="select-item-sub-arrow"
                              onMouseEnter={() =>
                                 (Array.from(servicesDropdown)[0].style.display = 'block')
                              }
                           />
                           <Box className="select-item-sub services-dropdown">
                              {/* <Box display={'none'}> */}
                              <Box className="select-item-sub-container">
                                 {/* <Typography variant="h5" className="select-item-dropdown-text"></Typography> */}
                                 <NavLink
                                    to={language + '/services/web-development'}
                                    className="select-item-dropdown-text">
                                    {' '}
                                    {/* Web Development */}
                                    {t('subject.op2', { ns: 'form' })}
                                 </NavLink>
                              </Box>
                              <Box className="select-item-sub-container">
                                 {/* <Typography variant="h5" className="select-item-dropdown-text">
                  Digital Marketing
               </Typography> */}
                                 <NavLink
                                    to={language + '/services/digital-marketing'}
                                    className="select-item-dropdown-text">
                                    {' '}
                                    {t('subject.op3', { ns: 'form' })}
                                 </NavLink>
                              </Box>
                              <Box className="select-item-sub-container">
                                 {/* <Typography variant="h5" className="select-item-dropdown-text"> */}
                                 {/* <Typography variant="h6" className="select-item-dropdown-text" fontFamily={['Roboto', 'Helvetica Neue', 'Helvetica']}> */}
                                 {/* Consulting */}
                                 {/* </Typography> */}
                                 <NavLink
                                    to={language + '/services/consulting'}
                                    className="select-item-dropdown-text">
                                    {' '}
                                    {t('subject.op4', { ns: 'form' })}
                                 </NavLink>
                              </Box>
                           </Box>
                        </Box>
                     </Gridd>
                     <Gridd
                        item
                        md={0.7}
                        sx={{
                           // border: '1px solid black',
                           width: 'fit-content'
                        }}>
                        <ActiveNavLink to={language + '/contact'} text={t('contact')} />
                     </Gridd>
                     <Gridd item md={1.5} className="language-item">
                        {/* <ActiveNavLink to="/en/opo" text="Language" /> */}
                        <Box
                           className="language-item-sub"
                           onMouseLeave={() => (Array.from(dropdown)[0].style.display = 'none')}>
                           <img src={region} alt="language-flag" className="language-image" />
                           <ExpandMoreOutlined
                              fontSize="large"
                              className="language-item-sub-arrow"
                              onMouseEnter={() => (Array.from(dropdown)[0].style.display = 'grid')}
                           />
                           <Box className="language-dropdown lang-dropdown">
                              {/* <Box display={'none'}> */}
                              <Box
                                 className="language-dropdown-item"
                                 onClick={function () {
                                    if (language === '/en') {
                                       console.log('en already');
                                    } else {
                                       setLanguage('/en');
                                       setRegion(anglais);
                                       setTimeout(() => navigate('/en/home'), 300);
                                       languageSwitcher('/en');
                                       console.log('lang: ', location, 'mang: ', location.pathname);
                                    }
                                 }}>
                                 <img src={anglais} alt="britain-flag" className="language-image" />
                              </Box>
                              <Box
                                 className="language-dropdown-item"
                                 onClick={function () {
                                    if (language === '/fr') {
                                       console.log('fr already');
                                    } else {
                                       setLanguage('/fr');
                                       setRegion(france);
                                       setTimeout(() => navigate('/fr/home'), 300);
                                       languageSwitcher('/fr');
                                       console.log('lang: ', language);
                                    }
                                 }}>
                                 <img src={france} alt="france-flag" className="language-image" />
                              </Box>
                              <Box
                                 className="language-dropdown-item"
                                 onClick={function () {
                                    if (language === '/de') {
                                       console.log('de already');
                                    } else {
                                       setLanguage('/de');
                                       setRegion(german);
                                       setTimeout(() => navigate('/de/home'), 300);
                                       languageSwitcher('/de');
                                       console.log('lang: ', language);
                                    }
                                 }}>
                                 <img src={german} alt="german-flag" className="language-image" />
                              </Box>
                           </Box>
                        </Box>
                     </Gridd>
                  </Grid>
               </Grid>
            </Grid>
         </ThemeProvider>
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
