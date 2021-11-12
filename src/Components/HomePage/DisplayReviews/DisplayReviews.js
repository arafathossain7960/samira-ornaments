import React, { useEffect, useState } from 'react';
import './DisplayReviews.css';
import SingleReview from './SingleReview/SingleReview';

const DisplayReviews = () => {
const [displayReviews, setDisplayReviews]=useState([]);


useEffect(()=>{
    fetch('http://localhost:5000/reviews')
    .then(res => res.json())
    .then(data =>setDisplayReviews(data))
},[])

    return (
        <div className="container">
            <div className=" text-center m-5 px-5 ">
                <h3>User Feedbacks </h3>
                <p>Customer feedback is essential to guide and inform your decision making and influence innovations and changes to your product or service.</p>
            </div>
            <div className="row">
                {
                    displayReviews.map(displayReview =><SingleReview
                    key={displayReview._id}
                    displayReview={displayReview}
                    
                    
                    ></SingleReview>)
                }
            </div>
        </div>
    );
};

export default DisplayReviews;