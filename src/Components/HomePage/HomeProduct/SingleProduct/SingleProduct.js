
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './singleProduct.css';

const SingleProduct = ({ornament}) => {
    const {_id,price, ornamentName, description, imgUrl}=ornament;
  
    return (
        <div className="col-xm-12 col-sm-4 col-md-4 col-lg-4" >
        <Card className="pds-card">
         <Card.Img className="pds-img" style={{width:'200px', hight:'200px', textAlign:'center'}} variant="top" src={imgUrl} />
        <Card.Body>
        <Card.Title>{ornamentName}</Card.Title>
        <Card.Text>
       $ {price}
        </Card.Text>
        <Card.Text>
        {description}
        </Card.Text>
        <Link path to={`/placeOrder/${_id}`}>
        <Button className="btn deal-btn"  >Buy Now</Button>
        </Link>
       
         </Card.Body>
        </Card>
        </div>
    );
};

export default SingleProduct;