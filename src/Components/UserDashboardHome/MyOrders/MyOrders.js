import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import './MyOrders.css';
import Order from './Order';

const MyOrders = () => {
    const {user}=useAuth();
    const [myOrders, setMyOrders]=useState([]);
    const [loadingDelete, setLoadingDelete]=useState(false);
    useEffect(()=>{
        const url=`http://localhost:5000/myOrders/${user.email}`
        fetch(url)
        .then(res =>res.json())
        .then(data => setMyOrders(data))
    },[loadingDelete])
    return (
        <div className="container">
            <div className="row">
            <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>Item Name</th>
                    <th>Price</th>
                    <th>Email</th>
                    <th>Status</th>
                    <th>Cancel order</th>
                </tr>
            </thead>
            <tbody>
             {
                 myOrders.map(order=><Order
                 key={order._id}
                 order={order}
                 setLoadingDelete={setLoadingDelete}
                 ></Order>)
             }
               </tbody>
            </Table>
            </div>
        </div>
    );
};

export default MyOrders;