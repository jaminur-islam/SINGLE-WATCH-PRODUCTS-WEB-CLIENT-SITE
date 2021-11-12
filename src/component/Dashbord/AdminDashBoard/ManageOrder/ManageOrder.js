import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import OrderLIst from '../../../Shared/OrderList/OrderLIst';
import Myorders from '../../UserDashBoard/Myorders/Myorders'

const ManageOrder = () => {
  const {isAdmin} =useAuth();
  const [isApprove , setIsApprove] = useState(false);
  const [orders , setOrders] = useState([]);
  useEffect(()=>{
    axios(`https://fierce-escarpment-48100.herokuapp.com/order`)
  .then(result =>{
    setOrders(result.data)
  })
  } ,[isApprove])

  const cancelHandle = (id) =>{
    const isDelete = window.confirm('are you sure ?')
    if(isDelete){
      axios.delete(`https://fierce-escarpment-48100.herokuapp.com/order/${id}`)
    .then(result =>{
      const newOrders = orders.filter(order => order._id !== id);
      setOrders(newOrders)
      alert('Delete successfully')
    })
    }
  }
  
  const handleApprove = (id) =>{
    axios.put(`https://fierce-escarpment-48100.herokuapp.com/order/${id}`)
    .then(result =>{
      if(result.data.modifiedCount>0){
        setIsApprove(true)
         alert('Order Done')
      }
    })
    
  }
   
  let num = 1;
  return (
    <div>
      <div className="table-responsive bg-dark pb-5" style={{marginTop: '-20px'}} >
    <table className="table caption-top container " style={{backgroundColor:"#75a3a3" , borderRadius: '5px'}}>
      <caption className="fs-4 ps-2 text-white">All Order list </caption>
      <thead>
        <tr>
          <th scope="col">Sl</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">OrderId</th>
          <th scope="col">Product</th>
          <th scope="col">Location</th>
          <th scope="col"> Date </th>
          <th scope="col"> Status </th>
          <th scope="col"> Delete </th>
          <th scope="col"> Approve </th>
          
            
          

        </tr>
      </thead>
      {orders?.map((order) => <OrderLIst
        key={order._id}
        order={order}
        cancelHandle={cancelHandle}
        orderId={1}
        num = {num++}
        isApprove={isApprove}
        handleApprove={handleApprove}
      > </OrderLIst> )}
    </table>
  </div>
   </div>
  );
};

export default ManageOrder;