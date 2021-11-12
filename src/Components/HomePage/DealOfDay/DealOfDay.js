import React from 'react';
import deal from '../../../images/deal/deal.png';

const DealOfDay = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-sm-12 col-md-7 col-lg-7 mt-5">
                    <h1>Deal of the day</h1>
                </div>
                <div className="col-sm-12 col-md-5 col-lg-5 image-fluid">
                <img src={deal} alt="" />
                </div>

            </div>
            
        </div>
    );
};

export default DealOfDay;