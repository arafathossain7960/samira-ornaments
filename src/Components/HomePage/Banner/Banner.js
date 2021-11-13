import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
    return (
        <div className="w-100 banner" >
            <div className="banner-contain">
                <h1>Samira Ornaments for</h1>

                  <h1>  your next function</h1>
                <p>We are promising to you,
               we will give you the world best jewellery</p>

               
               <button className="btn banner-btn"><Nav.Link as={Link} to='/moreCollection'>Read More</Nav.Link></button>
            </div>
        </div>
    );
};

export default Banner;