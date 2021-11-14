import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import AllOrder from './AllOrder/AllOrder';
import './AllOrders.css';

const AllOrders = () => {
    const [allOrders, setAllOrders]=useState([]);
    const [loadingDelete, setLoadingDelete]=useState(false);
    const [updateLoading, setUpdateLoading]=useState(false);


    useEffect(()=>{
        fetch('https://afternoon-river-42961.herokuapp.com/allOrders')
        .then(res =>res.json())
        .then(data =>setAllOrders(data))
    },[loadingDelete, updateLoading])

    return (
        <div className="container">
            <div className="row">
                <div className="text-center py-1"><h3>Order table</h3> </div>
            <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>Item Name</th>
                    <th>Price</th>
                    <th>Email</th>
                    <th>Approve</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
             {
                 allOrders.map(order=><AllOrder
                 key={order._id}
                 order={order}
                 setLoadingDelete={setLoadingDelete}
                 setUpdateLoading={setUpdateLoading}
                 ></AllOrder>)
             }
               </tbody>
            </Table>
            </div>
        </div>
    );
};

export default AllOrders;

                   