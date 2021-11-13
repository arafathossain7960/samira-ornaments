import React, { useState } from 'react';
import './AddCollection.css';
import { useForm } from "react-hook-form";
import { Alert } from 'react-bootstrap';
const AddCollection = () => {


    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const onSubmit = data =>{
       
        const ornamentName=data.ornamentName;
        const imgUrl=data.imgUrl;
        const description=data.description;
        const price= data.price;
        const ornament ={ornamentName, imgUrl,price, description};
        fetch('http://localhost:5000/addCollection',{
            method:"POST",
            headers:{'content-type':'application/json'},
            body:JSON.stringify(ornament)
        })
        .then(res =>res.json())
        .then(data =>{
            if(data.insertedId){
             Alert('Collection added success');  
        
            }
            
            });

        }

    return (
     <div>
      <div><h3>Add New Ornaments</h3></div>
      <div className="addNewCollection">
     <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" {...register("ornamentName",{ required: true })} placeholder="Enter Collection Name" />
      <br />
      <input type="text" {...register("imgUrl", { required: true })} placeholder="Enter Image url" />
      <br />
      <input type="text" {...register("price", { required: true })} placeholder="Enter price" />
      <br />
      <input type="text" {...register("description", { required: true })} placeholder="Enter short description" />
      <br />
      <input  className="btn deal-btn" type="submit" />
     </form>
     </div>
    </div>
    );
};

export default AddCollection;