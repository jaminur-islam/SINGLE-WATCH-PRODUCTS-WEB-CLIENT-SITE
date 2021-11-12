import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import profileimg from "../../../img/profileimg.png";
import Allreview from '../../Shared/Allreview/Allreview';

const Review = () => {
  const [reviews , setReviews] = useState([]);

  useEffect(()=>{
    axios('https://fierce-escarpment-48100.herokuapp.com/review')
    .then(result=>{
      setReviews(result.data);
    })
  },[])
  return (
    <div>
      <div className='container my-5'>
      <h1 className='my-3'> Customer review </h1>
        <div className='row'>
             {
               reviews.map(review => <Allreview
               key={review._id}
                review={review}
               
               > 

               </Allreview>)
             }
        </div>
    </div>
    </div>
  );
};

export default Review;