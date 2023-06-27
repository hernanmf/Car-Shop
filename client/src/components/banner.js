import React from 'react';

import bannerImg from '../assets/images/bannerlogogrande.png';

import '../css/banner.css'

const Banner = () => {
  return (
    <div className='banner-style' >
      <img src={bannerImg} alt="CAR SHOP" className='banner-image'/>
    </div>
  )
}

export default Banner;