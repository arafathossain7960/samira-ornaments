import React from 'react';
import './SingleReview.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const SingleReview = ({displayReview}) => {
    const {name, review, star }=displayReview;
    
    return (
        <div className="col-xm-12 col-sm-12 col-md-6 col-lg-6">
            <div className="sReviews">
                <div className="px-3 mb-3"> 
                <h5>{name}</h5>
              {
                        parseInt(star)===1 &&   <p className="review-start">
                          
                            <FontAwesomeIcon icon={faStar} /></p>
                        }
              {
                        parseInt(star)===2 &&   <p className="review-start">
                            
                     <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        </p>
                        }
              {
                        parseInt(star)===3 &&   <p className="review-start">
                            
                         <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        </p>
                        }
              {
                      parseInt(star)===4 &&   
                      <p className="review-start">
                          
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        </p>
                    }
              {
                      parseInt(star) >4 &&   
                      <p className="review-start">
                         
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        </p>
                    }
              
                </div>
                <div className="m-2 ">
                <p >{review}</p>
                </div>
               
            </div>
        </div>
    );
};

export default SingleReview;