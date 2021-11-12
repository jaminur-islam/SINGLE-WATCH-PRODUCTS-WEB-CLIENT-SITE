import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import profileimg from "../../../img/profileimg.png";

const Review = () => {
  const [reviews , setReviews] = useState([]);

  useEffect(()=>{
    axios('http://localhost:5000/review')
    .then(result=>{
      setReviews(result.data);
    })
  },[])


const {email , comment , img} = reviews || {}

  return (
    <div>
      <div className='container my-5'>
      <h1 className='my-3'> Customer review </h1>
        <div className='row'>
             {
               reviews.map(review =>{
                 return(
                  <div key={review._id} className='col-lg-4 text-center'>
                  <div className='p-3 m-2'>
                  <img width='40'  height='40' className='rounded-circle me-3 mb-2' src={review.img || profileimg }  alt="" />
                  <p> {review.name || 'No name'}</p>
               <h6>
               <Rating
                      emptySymbol="far fa-star empty"
                      fullSymbol="fas fa-star full"
                      initialRating={review.rating}
                      readonly
                    />
                    ({review.rating})
               </h6>
                <span> {review.comment} </span>
                
              </div>
                  </div>
                 )
               })
             }
        </div>
    </div>
    </div>
  );
};

export default Review;