import React from 'react';
import './MakeAddmin.css';
import { useForm } from "react-hook-form";
const MakeAddmin = () => {

    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const onSubmit = data =>{
            const email=data.email;
            const role=data.role;
            const admin={email, role};

        console.log(admin)
        fetch("http://localhost:5000/makeAdmin",{
            method:"PUT",
            headers:{'content-type':'application/json'},
            body:JSON.stringify(admin)
        })
        .then(res =>res.json())
        .then(result =>{
            if(result.modifiedCount>0){
                alert('Admin successfully added!');
            }
        })
        
    }

    return (
        
     <div>
      <div><h3>Make a admin</h3></div>
      <div className="addNewCollection">
     <form onSubmit={handleSubmit(onSubmit)}>
      <input type="email" {...register("email", { required: true })} placeholder="Enter user email" />
      <br />
      <input type="text" {...register("role", { required: true })} placeholder="add role" />
      <br />
      <input   className="btn btn-info text-light" type="submit" />
     </form>
     </div>
     </div>
    );
};

export default MakeAddmin;

// onClick={() => reset()} 