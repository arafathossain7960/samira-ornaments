import React from 'react';
import Banner from '../Banner/Banner';
import DealOfDay from '../DealOfDay/DealOfDay';
import Products from '../HomeProduct/Products/Products';
import './Home.css';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <DealOfDay></DealOfDay>
           <Products></Products>
        </div>
    );
};

export default Home;