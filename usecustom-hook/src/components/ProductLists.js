import React from "react";
import { useState } from "react";
import useCustom from "../customhook/useCustom";

const ProductLists = () => {
  const [url, setUrl] = useState("http://localhost:8000/products");
  const { data: products } = useCustom(url);
  console.log(products);

  //output call infinity time data from api
  //   fetch("http://localhost:8000/products/")
  //   .then((Response) => Response.json())
  //   .then((data) => console.log(data));

  return (
    <section>
      <button onClick={() => setUrl("http://localhost:8000/products")}>
        All
      </button>
      <span> </span>
      <button
        onClick={() => setUrl("http://localhost:8000/products?in_stock=true")}
      >
        In Stock
      </button>

      {products &&
        products.map((product) => (
          <div className="card" key={product.id}>
            <p className="id">{product.id}</p>
            <p className="name">{product.name}</p>
            <p className="info">
              <span>price: ${product.price}</span>
              <span className={product.in_stock ? "instock" : "unavailable"}>
                {product.in_stock ? "In stock" : "unavailable"}
              </span>
            </p>
          </div>
        ))}
    </section>
  );
};

export default ProductLists;
