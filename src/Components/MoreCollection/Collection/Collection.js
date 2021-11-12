import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Collection = ({ornament}) => {
    const {_id, ornamentName,price, description, imgUrl}=ornament;
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
        <Button className="btn deal-btn" >Buy Now</Button>
        </Link>
       
         </Card.Body>
        </Card>
        </div>
    );
};

export default Collection;