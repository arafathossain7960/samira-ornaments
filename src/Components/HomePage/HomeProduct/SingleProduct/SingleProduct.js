
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './singleProduct.css';

const SingleProduct = ({ornament}) => {
    const {_id,price, ornamentName, description, imgUrl}=ornament;
  
    return (
        <div className="col-xm-12 col-sm-4 col-md-4 col-lg-4" >
        <Card >
         <Card.Img style={{width:'120px', hight:'150px'}} variant="top" src={imgUrl} />
        <Card.Body>
        <Card.Title>{ornamentName}</Card.Title>
        <Card.Text>
       $ {price}
        </Card.Text>
        <Card.Text>
        {description}
        </Card.Text>
        <Link path to={`/placeOrder/${_id}`}>
        <Button variant="primary" >Buy Now</Button>
        </Link>
       
         </Card.Body>
        </Card>
        </div>
    );
};

export default SingleProduct;