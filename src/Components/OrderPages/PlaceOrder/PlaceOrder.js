import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './PlaceOrder.css';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';

const PlaceOrder = () => {
    const {user}=useAuth();
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const [oneProduct, setOneProduct]=useState({});
    const {id}=useParams();

    useEffect(()=>{
        const url = `http://localhost:5000/ornaments/${id}`
        fetch(url)
        .then(res =>res.json())
        .then(data =>setOneProduct(data))
    },[]);
   

    const onSubmit = data =>{
        const email= user.email;
        const ornamentName=oneProduct.ornamentName;
        const price= oneProduct.price;
        const status="pending";
        const imgUrl= oneProduct.imgUrl;
        const description= oneProduct.description;
        const item ={email, ornamentName, price, status, imgUrl, description};
        
        // post data to database
        fetch('http://localhost:5000/orders', {
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(item)
        })
        .then(res =>res.json())
        .then(data =>{
           if(data.insertedId){
               alert('Order has been successfully placed')
           } 
        })
    }
    return (
        <div className="container my-5 text-center">
       
            <div><h2  className="text-info"> Your Special order</h2>
            <p className="px-5 mx-5">The Supplier Purchase Summary report lists the numbers and amount of orders you have placed with various suppliers during a particular period</p>
            </div>
    <div className='row'>
      <div className="addNewCollection col-xm-12 col-sm-12 col-md-6 col-lg-6">
          <h4>Summary</h4>
     <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" defaultValue={`Name: ${oneProduct?.ornamentName}`} {...register("ornamentName",{ required: true })} />
      <br />
      <input type="text" defaultValue={`Price: $ ${oneProduct?.price}`} {...register("price", { required: true })}  />
      <br />
      <input type="text" defaultValue={oneProduct?.description} {...register("description", { required: true })} />
      <br />
      <input onClick={() => reset()} className="btn btn-info text-light" type="submit" />
     </form>
     </div>
     <div className="col-xm-12 col-sm-12 col-md-6 col-lg-6 text-center ">
         <h4>Your item</h4>
         <img style={{height:"150px"}} src={oneProduct.imgUrl} alt="" />
         <h4>Name: {oneProduct.ornamentName}</h4>
         <p>Price : {oneProduct.price}</p>

     </div>
    </div>
    </div>
    );
};

export default PlaceOrder;