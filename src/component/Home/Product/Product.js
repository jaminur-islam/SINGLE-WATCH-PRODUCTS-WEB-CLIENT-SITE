import React from "react";
import Rating from "react-rating";
import { useHistory } from "react-router";
import useAuth from "../../Hooks/useAuth";
import './product.css'

const Product = ({ product }) => {
  const {user } = useAuth();
 
  const { name, img, describiton, rating , _id } = product || {};
  const history = useHistory();
  const HandleOrder =(_id) =>{
      history.push(`/order/${_id}`)
  }
  return (
    <div className="col-lg-4">
      <div className='text-center p-3 m-3'>
        <img className='rounded' width='300' height='300' src={img} alt="" />
         <h5 className='text-success mt-2'>{name}</h5>
         <h6 style={{fontSize: '13px'}}>
            
              <Rating
                emptySymbol="far fa-star empty"
                fullSymbol="fas fa-star full"
                initialRating={rating}
                readonly
              />
              ({rating})
            </h6>
            <p className='text-dark text-lowercase'>{describiton.slice(0 , 150)}</p>

         <button onClick={()=>HandleOrder(_id)} className='btn btn-primary '> Order now </button>
      </div>
    </div>
  );
};

export default Product;
