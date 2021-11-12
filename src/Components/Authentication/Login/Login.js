import React from 'react';
import './Login.css';
import { useForm } from "react-hook-form";
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const {signInUserWithEmailPassword, user}=useAuth();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const location =useLocation();
    const history =useHistory();

    const onSubmit = data =>{
        signInUserWithEmailPassword(data.email, data.password, location, history)
    
    };
    
    return (
        <div className='m-5 pt-5'>
            <h1>THis is a login page</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
    
     <input type="email" {...register("email", { required: true })} placeholder="Enter your Email"/>
     <input type="password" {...register("password", { required: true })} placeholder="Enter your password" />
    
     {errors.exampleRequired && <span>This field is required</span>}
     
     <input type="submit" />
   </form>
   <p>-----------or-----------------</p>
   <Link to='/register'>
   <h5>Create a user </h5>
   </Link>
        </div>
    );
};

export default Login;