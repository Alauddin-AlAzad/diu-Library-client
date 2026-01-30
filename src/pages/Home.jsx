import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Carousel from '../components/Carousel';
import TabCategories from '../components/TabCategories';

const Home = () => {
    return (
        <div>
         <Carousel></Carousel>
         <TabCategories></TabCategories>
        </div>
    );
};

export default Home;