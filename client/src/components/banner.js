import React from 'react';

import bannerA from '../assets/images/bannerA.jpg';
import bannerB from '../assets/images/bannerB.jpg';
import bannerC from '../assets/images/bannerC.jpg';
import bannerD from '../assets/images/bannerD.jpg';
import Carousel from 'react-bootstrap/Carousel';

import '../css/banner.css'

const Banner = () => {
  return (
  <>
      <Carousel indicators={false} interval={4000} pause={false} fade>
      <Carousel.Item>
        <img
          className='banner-image'
          src={bannerA}
          alt=""
          fluid
        />
        <Carousel.Caption> <h1>CAR SHOP</h1> </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="banner-image"
          src={bannerB}
          alt=""
          fluid
        />
        <Carousel.Caption> <h1>CAR SHOP</h1> </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="banner-image"
          src={bannerC}
          alt=""
          fluid
        />
        <Carousel.Caption> <h1>CAR SHOP</h1> </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="banner-image"
          src={bannerD}
          alt=""
          fluid
        />
        <Carousel.Caption> <h1>CAR SHOP</h1> </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  )
}

export default Banner;