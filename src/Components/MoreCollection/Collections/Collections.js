import React, { useEffect, useState } from 'react';
import Collection from '../Collection/Collection';
import './Collections.css';

const Collections = () => {
    const [ornaments, setOrnaments]=useState([]);
    useEffect(()=>{
        fetch('https://afternoon-river-42961.herokuapp.com/ornaments')
        .then(res => res.json())
        .then(data =>setOrnaments(data) )
    },[])
    return (
        <div className="container">
            <div className='text-center py-3 collection-title'>
                <h3>Our special collection</h3>
                <p className="px-5 mx-5">We are trying to our best to give you wold best ornaments
                    <br />
                    here the most popular and expensive collection.
                </p>
                </div>
        <div className="row ">
            {
                ornaments.map(ornament =><Collection
                key={ornament._id}
                ornament={ornament}
                
                ></Collection>)
            }
        </div>
        </div>

        
    );
};

export default Collections;