import React from "react";
import { useState } from "react";
import useProducts from "../../Hooks/useProducts";
import Apple from "../Apple/Apple";
import Asus from "../Asus/Asus";
import Samsung from "../Samsung/Samsung";

const FutureProducts = () => {
  const { products } = useProducts(
    "https://fierce-escarpment-48100.herokuapp.com/futureProducts"
  );
  const futureProducts = products?.products;

  const [productName, setProductName] = useState("apple");

  return (
    <div className="mt-4 container">
      <div className="row">
        <h2 className="text-center"> Best Seller </h2>
        <hr className="w-25 mx-auto" style={{ border: "2px solid #FF0040" }} />
        <div>
          <div className="text-center mt-3">
            <button
              onClick={() => setProductName("apple")}
              className={productName == "apple" ? "btn btn-primary" : ""}
            >
              Apple
            </button>
            <button
              style={{ margin: "0 40px" }}
              onClick={() => setProductName("asus")}
              className={productName == "asus" ? "btn btn-primary" : ""}
            >
              Asus
            </button>
            <button
              onClick={() => setProductName("samsung")}
              className={productName == "samsung" ? "btn btn-primary" : ""}
            >
              Samsung
            </button>
          </div>

          <div className="container mt-3">
            <div className="row ">
              {productName == "apple" &&
                futureProducts
                  ?.slice(0, 6)
                  .map((product) => (
                    <Apple key={product._id} product={product}></Apple>
                  ))}
              {productName == "asus" &&
                futureProducts
                  ?.slice(7, 13)
                  .map((product) => (
                    <Asus key={product._id} product={product}></Asus>
                  ))}
              {productName == "samsung" &&
                futureProducts
                  ?.slice(9, 15)
                  .map((product) => (
                    <Samsung key={product._id} product={product}></Samsung>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FutureProducts;
