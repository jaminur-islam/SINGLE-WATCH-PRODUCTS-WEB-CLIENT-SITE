import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import { useHistory , useParams } from "react-router";
import '../Login/Login.css'

const Register= () => {
 const history = useHistory();
 const userLocation = useParams();
 console.log(userLocation)
 
  const {user , signUp} =useAuth();
  const { register, handleSubmit, reset , } = useForm();
 
  

  const onSubmit = data => {
    const {name , email , password} = data
    signUp(name ,email ,password, history)
    reset()
    console.log(data)
  } 


  return (
  <div className='bg-dark overflow-hidden login-container'>
     <div>
       <h1 className='fs-bold uppercase text text-center mt-2 text-white'>Register Now
       <hr className='w-50 mx-auto' />
       </h1>
     <form className='d-flex flex-column w mx-auto mt-4' onSubmit={handleSubmit(onSubmit)}>
    
    <input required type='text' placeholder='Your Full Name *' className='my-2 py-2'  {...register("name")} />
    <input required type='email' placeholder='Your email *' className='my-2 py-2'  {...register("email")} />
    <input required type='password' placeholder='Your password *' className='my-2 py-2'  {...register("password")} />
    <input required type='password' placeholder='Retype password *' className='mt-2 mb-3 py-2'  {...register("password2")} />
 
    <div className='d-flex justify-content-between mb-2'>
    <Link to='/login'>Already Have a Account ?  </Link>
   
    </div>
    <input className='mt-2' type="submit" value='Sign In' />


    </form>
     </div>
  </div>
  );
};

export default Register;