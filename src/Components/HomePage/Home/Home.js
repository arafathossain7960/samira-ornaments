import React from 'react';
import Banner from '../Banner/Banner';
import DealOfDay from '../DealOfDay/DealOfDay';
import DisplayReviews from '../DisplayReviews/DisplayReviews';
import Products from '../HomeProduct/Products/Products';
import './Home.css';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <DealOfDay></DealOfDay>
           <Products></Products>
           <DisplayReviews></DisplayReviews>
        </div>
    );
};

export default Home;