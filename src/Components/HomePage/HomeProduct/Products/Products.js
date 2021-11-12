import React, { useEffect, useState } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';
import './Products.css';

const Products = () => {
    const [ornaments, setOrnaments]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/ornaments')
        .then(res => res.json())
        .then(data =>setOrnaments(data.slice(0,6)) )
    },[])
    return (
        <div className="container mt-5">
            <div className="text-center mx-5 px-5">
                <h3>Featured Products</h3>
                <p>Sound G3 gives you music non-stop for up to 10 hours on one battery
charge enough for a party. And there’s no need to switch it off.</p>
            </div>
            <div className="row mt-5">
            {
                ornaments.map(ornament =><SingleProduct
                key={ornament._id}
                ornament={ornament}
                ></SingleProduct>)
            }

            </div>
        </div>
    );
};

export default Products;