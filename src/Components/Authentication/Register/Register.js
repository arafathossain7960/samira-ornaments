import React from 'react';
import './Register.css';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';
const Register = () => {
  const {user, createUserWithEmailPassword}=useAuth();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data =>{
      
        const name=data.name;
        const role='';
        const email=data.email;
        const password=data.password;
console.log(email, password)
       createUserWithEmailPassword(email, password, name, role)
    
    };
    return (
        <div className="m-5 pt-5">
         <form onSubmit={handleSubmit(onSubmit)}>
     
      <input type="text" {...register("name", { required: true })} placeholder="Enter your name" />
      
     
      <input type="email" {...register("email", { required: true })} placeholder="Enter your Email"/>
      <input type="password" {...register("password", { required: true })} placeholder="Enter your password" />
     
      {errors.exampleRequired && <span>This field is required</span>}
      
      <input type="submit" />
    </form>
        </div>
    );
};

export default Register;