import React from 'react';
import './Review.css';
import { useForm } from "react-hook-form";
import review from '../../../images/review/review.png';


const Review = () => {
   
    

    const { register, handleSubmit,reset,  formState: { errors } } = useForm();
  const onSubmit = data => {
    
     const name=data.name;
        const review=data.comments;
        const star = data.star;
        const reviews = { name, review, star};
        console.log(reviews)
        fetch('http://localhost:5000/reviews',{
            method:"POST",
            headers:{'content-type':'application/json'},
            body:JSON.stringify(reviews)
        })
        .then(res=>res.json())
        .then(result=>{
            if(result.insertedId){
                return alert('Review Added')
            }
        })
  };
    
   
    
 return (
    <div className="container">
        <div className="row my-3 py-2">
            <div className="col-xm-12 col-sm-12 col-md-6 col-lg-6">
                <div className="text-center"><h4>Add your review</h4></div>


         <form onSubmit={handleSubmit(onSubmit)}>
     
      <input type='text' {...register("name", {required: true})}  />
      <br />
    
      <textarea type="text" {...register("comments", { required: true })} placeholder="Enter comment here" />
      <br />
      <input type="text" {...register("star", { required: true })} placeholder="Enter your Review 1-5" />
     <br />
      
      
      <input className="btn btn-info text-light" type="submit" />
    </form>
            </div>
            <div className="col-xm-12 col-sm-12 col-md-6 col-lg-6">
                <img style={{height:'200px', }} src={review} alt="" />
            </div>
        </div>
    </div>
    );
};

export default Review;