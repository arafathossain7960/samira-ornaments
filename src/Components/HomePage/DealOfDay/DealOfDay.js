import React, { useEffect, useState } from 'react';
import './DealOfDay.css';
import deal from '../../../images/deal/deal.png';

import { Link } from 'react-router-dom';
import { Button} from 'react-bootstrap';



const DealOfDay = () => {
    const [ornaments, setOrnaments]=useState([]);
    useEffect(()=>{
        fetch('https://afternoon-river-42961.herokuapp.com/ornaments')
        .then(res => res.json())
        .then(data =>setOrnaments(data.slice(0,6)) )
    },[])
    return (
        <div className="container mt-5">
            <div className="row deal-contain">
                <div className="col-sm-12 col-md-7 col-lg-7 deal-text mt-5">
                  <p className="deal-heading">DEAL OF HTE DAY</p>
                  <h2>SPECIAL ALFANOMA YAR RING</h2>
                  <small>Product promo code: #124560</small>
                  <p>This  earring is a very special for personal ornament worn pendent from 
                     <br /> the ear, usually suspended by means of a ring .</p>
                     <h4>$ 120</h4>
                   <Link to="/moreCollection"> <button className="btn deal-btn">Buy Now</button></Link>
                </div>
                <div className="col-sm-12 col-md-5 col-lg-5 deal-img">
                <img src={deal} alt="" />
                </div>

            </div>
            
        </div>
    );
};

export default DealOfDay;