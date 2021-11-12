import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="px-5 pt-5 pb-2  bg-dark text-light text-center">
            <div className="row">
                <div className='col-xm-12 col-sm-12 col-md-4 col-lg-4 footer-contain'>
                    <p>Our Client </p>
                    <p>Up new collection </p>
                    <p>Special offers </p>


                </div>
                <div className='col-xm-12 col-sm-12 col-md-4 col-lg-4 footer-contain '>
                    <p>Terms and conditions</p>
                    <p>Money back policy</p>
                    <p>Shipping system </p>

                </div>
                <div className='col-xm-12 col-sm-12 col-md-4 col-lg-4 footer-contain'>
                    <p>Phone : 01245678</p>
                    <p>Email : samira@ornament.com</p>
                    <p>Office: #3/A, Vali han, India</p>

                </div>
                    <span>All copy rights by samiraornaments 2021</span>
            </div>
            
        </div>
    );
};

export default Footer;