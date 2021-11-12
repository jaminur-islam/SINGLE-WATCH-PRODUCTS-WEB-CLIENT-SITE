import axios from "axios";
import React, { useEffect, useState } from "react";
import useProducts from "../../Hooks/useProducts";
import Product from "../Product/Product";

const Products = () => {
 const {products} = useProducts();
  

  return (
   <div>
      <div className="container" id='products'>
      <h2 className='text-center mt-5'> Hot Deal Products </h2>
       <hr className='w-25 mx-auto' style={{border: '2px solid #FF0040'}} />
      <div className="row">
         {
           products.slice(6 , 15).map(product => <Product
           key={product._id}
           product={product}
           order = {'order'}
           > </Product>)
         }
      </div>
    </div>
   </div>
  );
};

export default Products;
