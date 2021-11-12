import React from 'react';

import './AllOrder.css';

const AllOrder = ({order, setLoadingDelete}) => {
    const  {_id, email, ornamentName, price, status}=order;
    // Update status function
    const handleUpdateStatus=id=>{
        fetch(`http://localhost:5000/updateStatus/${id}`,{
            method:"PUT"
        })
        .then(res => res.json())
        .then(data =>{})
    }

    // Delete function
    const handleOrderDelete=id=>{
        const proceed = window.confirm('Are you sure the order is delete?');
        if(proceed){
            fetch(`http://localhost:5000/orderDelete/${id}`,{
                method:"DELETE"
            })
            .then(res =>res.json())
            .then(data =>{
                if(data.deletedCount>0){
                    alert('Order delete has been success!');
                    setLoadingDelete(true);
                }else{
                    setLoadingDelete(false);
                }
            })
        }
    }


    return (
        <>
         <tr>
             <td>{ornamentName}</td>
             <td>{price}</td>
             <td>{email}</td>
             <td><button className="btn btn-primary" onClick={()=>handleUpdateStatus(_id)} >{status}</button> 
             <button className="btn btn-danger" onClick={()=>handleOrderDelete(_id)}>Delete</button>  </td>
         </tr> 
         </>
    );
};

export default AllOrder;