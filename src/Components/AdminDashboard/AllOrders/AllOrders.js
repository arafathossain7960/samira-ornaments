import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import AllOrder from './AllOrder/AllOrder';
import './AllOrders.css';

const AllOrders = () => {
    const [allOrders, setAllOrders]=useState([]);
    const [loadingDelete, setLoadingDelete]=useState(false);


    useEffect(()=>{
        fetch('http://localhost:5000/allOrders')
        .then(res =>res.json())
        .then(data =>setAllOrders(data))
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
                    <th>Approve/Delete</th>
                </tr>
            </thead>
            <tbody>
             {
                 allOrders.map(order=><AllOrder
                 key={order._id}
                 order={order}
                 setLoadingDelete={setLoadingDelete}
                 ></AllOrder>)
             }
               </tbody>
            </Table>
            </div>
        </div>
    );
};

export default AllOrders;

                    //  <td>{AllOrder?.ornamentName}</td>
                    // <td>{AllOrder?.price}</td>
                    // <td>{AllOrder?.email}</td>