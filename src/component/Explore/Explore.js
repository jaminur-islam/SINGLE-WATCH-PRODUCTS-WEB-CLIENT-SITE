import React from 'react';
import Product from '../Home/Product/Product';
import useProducts from '../Hooks/useProducts';
import Navigation from '../Shared/Navigation/Navigation';

const Explore = () => {
  const {products} = useProducts("https://fierce-escarpment-48100.herokuapp.com/products");
  return (
   <div>
     <Navigation></Navigation>
     <h1 className='text-center mt-5'> More product fairs </h1>
     <hr className='w-25 mx-auto' style={{border: '2px solid #FF0040'}} />
       <div className='container'>
       <div className='row'>
       {
         products.map(product => <Product
           key={product._id}
            product={product}
            order = {'order'}
            >

            </Product>)
       }
    </div>
       </div>
   </div>
  );
};

export default Explore;