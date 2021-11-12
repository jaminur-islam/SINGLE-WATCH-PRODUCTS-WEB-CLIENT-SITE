import axios from "axios";
import { useEffect, useState } from "react";

const useProducts = () =>{
const [products, setProducts] = useState([]);
useEffect(() => {
  axios("http://localhost:5000/products").then((result) => {
    setProducts(result.data);
  });
}, []);

return {products}

}

export default useProducts