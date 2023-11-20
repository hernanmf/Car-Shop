import React from 'react';

import bannerImg from '../assets/images/bannerlogogrande.png';
import bannerA from '../assets/images/bannerA.jpg';
import bannerB from '../assets/images/bannerB.jpg';
import bannerC from '../assets/images/bannerC.jpg';
import bannerD from '../assets/images/bannerD.jpg';
import Carousel from 'react-bootstrap/Carousel';

import '../css/banner.css'

const Banner = () => {
  return (
    <div className='banner-style' >
      {/* <img src={bannerImg} alt="CAR SHOP" className='banner-image'/> */}
      <Carousel fade>
      <Carousel.Item>
        <img
          className='banner-image'
          src={bannerA}
          alt=""
          fluid
        />
        <Carousel.Caption> <h3>CAR SHOP</h3> </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="banner-image"
          src={bannerB}
          alt=""
          fluid
        />
        <Carousel.Caption> <h3>CAR SHOP</h3> </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="banner-image"
          src={bannerC}
          alt=""
          fluid
        />
        <Carousel.Caption> <h3>CAR SHOP</h3> </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="banner-image"
          src={bannerD}
          alt=""
          fluid
        />
        <Carousel.Caption> <h3>CAR SHOP</h3> </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Banner;