import React from "react";
import { useNote } from "./noteState";

const Product = () => {
  const a = useNote();
  useEffect(() => {
    a.update();
  }, []);
  return <div>Product: {a.state.name}</div>;
};

export default Product;
