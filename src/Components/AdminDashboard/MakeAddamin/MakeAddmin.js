import React from 'react';
import './MakeAddmin.css';
import { useForm } from "react-hook-form";
const MakeAddmin = () => {
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const onSubmit = data =>{
        console.log(data)
    }

    return (
        
     <div>
      <div><h3>Make a admin</h3></div>
      <div className="addNewCollection">
     <form onSubmit={handleSubmit(onSubmit)}>
      
     
      <input type="email" {...register("email", { required: true })} placeholder="Enter user email" />
      <br />
      <input type="text" {...register("description", { required: true })} placeholder="Enter short description" />
      <br />
      <input onClick={() => reset()} className="btn btn-info text-light" type="submit" />
     </form>
     </div>
     </div>
    );
};

export default MakeAddmin;