import React from 'react';
import { BrowserRouter, Route, BrowserRouter as Router, Routes } from 'react-router-dom'; 

import '../css/home.css';

import Banner from '../components/banner';
import ComponentesIndex from '../components/componentesIndex';
import Header from '../components/header';



const Home = () => {
  return (
    <div className='index' >
      <Banner />
      <ComponentesIndex />
    </div>
  )
}

export default Home;