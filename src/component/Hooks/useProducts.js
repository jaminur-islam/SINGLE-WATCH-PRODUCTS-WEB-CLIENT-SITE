import axios from "axios";
import { useEffect, useState } from "react";

const useProducts = () =>{
const [products, setProducts] = useState([]);
useEffect(() => {
  axios("https://fierce-escarpment-48100.herokuapp.com/products").then((result) => {
    setProducts(result.data);
  });
}, []);

return {products}

}

export default useProducts