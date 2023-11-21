import React from 'react';
import '../css/home.css';
import Banner from '../components/banner';
import ComponentesIndex from '../components/componentesIndex';

const Home = () => {
  return (
    <div className='index'>
      <Banner />
      <ComponentesIndex />
    </div>
  )
}

export default Home;