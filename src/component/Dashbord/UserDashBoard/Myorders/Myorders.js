import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";

const Myorders = () => {
  const [orders , setOrders]=useState([])
  const { user } = useAuth();
  useEffect(() => {
    axios(`http://localhost:5000/order?email=${user.email}`)
      .then((result) => {
        setOrders(result.data);
      });
  }, [user.email]);


  const cancelHandle = (id) =>{
    const isDelete = window.confirm('are you sure ?')
    if(isDelete){
      axios.delete(`http://localhost:5000/order/${id}`)
    .then(result =>{
      const newOrders = orders.filter(order => order._id !== id);
      setOrders(newOrders)
      alert('Delete successfully')
    })
    }
  }

  let num = 1;
  return(
   <div>
      <div className="table-responsive bg-dark p-5 mt-2" style={{marginTop: '-20px'}} >
    <table className="table caption-top container " style={{backgroundColor:"#75a3a3" , borderRadius: '5px'}}>
      <caption className="fs-4 text-white">Your order list </caption>
      <thead>
        <tr>
          <th scope="col">Sl</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Product</th>
          <th scope="col">Location</th>
          <th scope="col"> Date </th>
          <th scope="col"> Status </th>
          <th scope="col"> Delete </th>
        </tr>
      </thead>
      {orders?.map((order) => {
        return (
          <tbody key={order._id}>
            <tr>
              <th scope="row">{num++}</th>
              <td>{order.name}</td>
              <td>{order.email}</td>
              <td>{order.productName}</td>
              <td>{order.address}</td>
              <td>{order.date}</td>
              <td
                className={
                  order.status == "Approve" ? "text-success" : "text-primary"
                }
              >
                {order.status}
              </td>
              <td>
                {
                   order.status == "Approve"? <button className='border-0 btn-primary '> Succeeded</button>: <button
                   onClick={() => cancelHandle(order._id)}
                   className="border-0 bg-danger text-white fs-6"
                 >
                   Cancel
                 </button>
                }
               
              </td>
            </tr>
          </tbody>
        );
      })}
    </table>
  </div>
   </div>
  );
};

export default Myorders;
