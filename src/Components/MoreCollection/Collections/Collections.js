import React, { useEffect, useState } from 'react';
import Collection from '../Collection/Collection';
import './Collections.css';

const Collections = () => {
    const [ornaments, setOrnaments]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/ornaments')
        .then(res => res.json())
        .then(data =>setOrnaments(data) )
    },[])
    return (
        <div className="container">
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