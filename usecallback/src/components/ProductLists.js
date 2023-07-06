import React, { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";

const ProductLists = () => {
  const [products, setproducts] = useState([]);
  const [url, setUrl] = useState("http://localhost:8000/products");

  console.log(products);

  //render when call

  const fetchproducts = useCallback(async () => {
    const response = await fetch(url);
    const data = await response.json();
    setproducts(data);
  }, [url]);

  useEffect(() => {
    fetchproducts();
  }, [fetchproducts]);

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
