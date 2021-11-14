import React from 'react';
import './Review.css';
import { useForm } from "react-hook-form";
import review from '../../../images/review/review2.png';


const Review = () => {
   
    

    const { register, handleSubmit,reset,  formState: { errors } } = useForm();
  const onSubmit = data => {
    
     const name=data.name;
        const review=data.comments;
        const star = data.star;
        const reviews = { name, review, star};
        console.log(reviews)
        fetch('https://afternoon-river-42961.herokuapp.com/reviews',{
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
    <div className="container py-5">
        <div className="row my-3 py-2">
        <div className="col-xm-12 col-sm-12 col-md-6 col-lg-6">
    <div className="addReview text-center ">

    
      <div className="text-center"><h3>Add your review</h3></div>
     <form onSubmit={handleSubmit(onSubmit)}>
      <input type='text' {...register("name", {required: true})} placeholder="Enter Name"  />
      <br />
      <textarea type="text" {...register("comments", { required: true })} placeholder="Enter comment here" />
      <br />
      <input type="text" {...register("star", { required: true })} placeholder="Enter your Review 1-5" />
     <br />
      <input className="btn deal-btn" type="submit" />
    </form>
     </div>
     </div>

     <div className="col-xm-12 col-sm-12 col-md-6 col-lg-6">
          <div className="text-center mt-3"  >
          <img style={{height:'300px', }} src={review} alt="" />
          </div>
         </div>
    </div>
 </div>
    );
};

export default Review;