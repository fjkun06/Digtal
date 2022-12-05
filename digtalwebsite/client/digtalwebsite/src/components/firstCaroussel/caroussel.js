import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import WebDev from '../../assets/images/web-dev.jpeg';
import itcon from '../../assets/images/consulting.jpg';
import digitalMarketingimg from '../../assets/images/marketing.jpg';
import Grid from '@mui/material/Grid';
function CarouselFadeExample() {
    return (
       <>
          <Grid
             container
             pl={{ xs: 1, sm: 4 }}
             pr={{ xs: 1, sm: 4 }}
             fontFamily="Poppins, sans-serif"
             fontSize="2rem"
             m="0 auto">
             <Carousel fade>
                <Carousel.Item>
                   <img
                      max-width={'100%'}
                      height={'auto'}
                      className=" img-fluid "
                      src={WebDev}
                      alt="First slide"
                   />
                   <Carousel.Caption>
                      <h3>First slide label</h3>
                      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                   </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                   <img
                      max-width={'100%'}
                      height={'auto'}
                      className=" img-fluid "
                      src={itcon}
                      alt="Second slide"
                   />

                   <Carousel.Caption>
                      <h3>Second slide label</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                   </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                   <img
                      max-width={'100%'}
                      height={'auto'}
                      className=" img-fluid "
                      src={digitalMarketingimg}
                      alt="Third slide"
                   />

                   <Carousel.Caption>
                      <h3>Third slide label</h3>
                      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                   </Carousel.Caption>
                </Carousel.Item>
             </Carousel>
          </Grid>
       </>
    );
}

export default CarouselFadeExample;