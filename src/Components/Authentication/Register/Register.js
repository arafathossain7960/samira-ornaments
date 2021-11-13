import React from 'react';
import './Register.css';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';
import newUserImage from '../../../images/user/user.png';

const Register = () => {
  const {user,createAccount, createUserWithEmailPassword}=useAuth();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data =>{
      
        const name=data.name;
        const role='';
        const email=data.email;
        const password=data.password;
       if(data.password.length <6){
        return alert('Password must be 6 caracters')
         
       }
       createUserWithEmailPassword(email, password, name, role)
    
    };
    return (
   <div className="container m-5 p-3">
     <div className="row">
       <div className="col-xm-12 col-sm-12 col-md-6 col-lg-6">
       <div className="text-center mb-3 addNewCollection">
         <p className="text-primary">{createAccount}</p>
         <h3>Create a new account</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" {...register("name", { required: true })} placeholder="Enter your name" />
     <br />
      <input type="email" {...register("email", { required: true })} placeholder="Enter your Email"/>
      <br />
      <input type="password" {...register("password", { required: true })} placeholder="Enter your password" />
      <br />
      <input className="btn deal-btn" type="submit" />
    </form>
    </div>
    </div>
    <div className="col-xm-12 col-sm-12 col-md-6 col-lg-6">
      <div className=" text-center">
        <img style={{height:'350px'}} src={newUserImage} alt="" />
      </div>

    </div>
 </div>
</div>

       
    );
};

export default Register;