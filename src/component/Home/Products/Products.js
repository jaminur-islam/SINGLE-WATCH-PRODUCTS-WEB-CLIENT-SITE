import useProducts from "../../Hooks/useProducts";
import Product from "../Product/Product";

const Products = () => {
  const { products } = useProducts(
    "https://fierce-escarpment-48100.herokuapp.com/products"
  );

  return (
    <div
      style={{
        marginTop: "100px",
        backgroundColor: "#BDE4D6 ",
        padding: "10px 0",
      }}
    >
      <div className="container" id="products">
        <h2 className="text-center"> Hot Deal Products </h2>
        <hr className="w-25 mx-auto" style={{ border: "2px solid #FF0040" }} />
        <div className="row">
          {products.slice(1, 7).map((product) => (
            <Product
              key={product._id}
              product={product}
              order={"order"}
            ></Product>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
