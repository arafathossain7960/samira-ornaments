import React from 'react';
import './Login.css';
import { useForm } from "react-hook-form";
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import loginImage from '../../../images/user/user1.png';

const Login = () => {
    const {signInUserWithEmailPassword, user}=useAuth();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const location =useLocation();
    const history =useHistory();

    const onSubmit = data =>{
        signInUserWithEmailPassword(data.email, data.password, location, history)
    
    };
    
    return (
     <div className="container my-5 p-3">
         <div className="row">
          <div className="col-xm-12 col-sm-12 col-md-6 col-lg-6">
         <div className='text-center  login-contain addNewCollection'>
            <h3>Please login</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
        <input type="email" {...register("email", { required: true })} placeholder="Enter your Email"/>
        <br />
        <input type="password" {...register("password", { required: true })} placeholder="Enter your password" />
        <br />
        <input className="btn deal-btn" type="submit" value='login' />
        </form>
        <p>-----------or-----------------</p>
        <Link to='/register'>
        <p>Create a new account </p>
        </Link>
     </div>
    </div>

    <div className="col-xm-12 col-sm-12 col-md-6 col-lg-6">

        <div className="text-center">
            <img style={{height:'350px'}} src={loginImage} alt="" />
        </div>
    </div>
    </div>
     </div>
      
    );
};

export default Login;