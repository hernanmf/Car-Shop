import React from 'react';

import bannerImage from '../images/bannerlogogrande.png';
import '../css/banner.css'

const Banner = () => {
  return (
    <div className='banner-style' >
      <img src={bannerImage} alt="CAR SHOP" className='banner-image'/>
    </div>
  )
}

export default Banner