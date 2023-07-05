import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const ProductLists = () => {
  const [products, setproducts] = useState([]);
  const [url, setUrl] = useState("http://localhost:8000/products");

  console.log(products);

  useEffect(() => {
    // console.log("Mounted");
    // return console.log("UnMounted");

    fetch(url)
      .then((Response) => Response.json())
      .then((data) => setproducts(data));
  }, [url]);

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

      {products.map((product) => (
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
