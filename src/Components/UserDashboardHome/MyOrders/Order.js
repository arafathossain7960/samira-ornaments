import React from 'react';

const Order = ({order, setLoadingDelete}) => {
    const  {_id, email, ornamentName, price, status}=order;

    const handleMyOrderDelete=id=>{
        const proceed=window.confirm('Are you sure you want ot delete the order?');
        if(proceed){
        fetch(`http://localhost:5000/myOrderDelete/${id}`,{
            method:"DELETE"
        })
        .then(res =>res.json())
        .then(result =>{
            if(result.deletedCount>0){
                alert('the order delete hsa been success!')
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
                 <td>
                     {
                         status==="Approve"?<button className="btn btn-primary">{status}</button>
                         :<button className="btn btn-warning">{status}</button>
                        
                     }
                    
                    
                </td>
                 <td>
                     
                     <button onClick={()=>handleMyOrderDelete(_id)} className="btn btn-danger" type="submit">Cancel</button>
             
                </td>
         </tr> 
     </>
      
    );
};

export default Order;