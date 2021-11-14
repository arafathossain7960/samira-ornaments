import React from 'react';
import './MakeAddmin.css';
import { useForm } from "react-hook-form";
import makeAdmin from '../../../images/admin/admin.png';
const MakeAddmin = () => {

    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const onSubmit = data =>{
            const email=data.email;
            const role=data.role;
            const admin={email, role};

        console.log(admin)
        fetch("https://afternoon-river-42961.herokuapp.com/makeAdmin",{
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
        
 <div className="container py-5">
     <div className="row">

  <div className="text-center col-xm-12 col-sm-12 col-md-6 col-lg-6 mb-3">
      <div><h3>Make a admin</h3></div>
      <div className="makeAdmin ">
     <form onSubmit={handleSubmit(onSubmit)}>
      <input type="email" {...register("email", { required: true })} placeholder="Enter user email" />
      <br />
      <input type="text" {...register("role", { required: true })} placeholder="add role" />
      <br />
      <input   className="btn deal-btn" type="submit" />
     </form>
     </div>
     </div>
            <div className="text-center col-xm-12 col-sm-12 col-md-6 col-lg-6">
            <div  className="text-center  ">
            <img style={{height:'200px'}}  src={makeAdmin} alt="" />
            </div>
                
            </div>
            </div>
        </div>
   
    );
};

export default MakeAddmin;

// onClick={() => reset()} 