import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, fetchProducts } from "../core/redux/feateres/crud/crudThunk" // Adjust the import path accordingly

const ProductList = ({ setCurrentId }) => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products); // Adjust state selector for products

  useEffect(() => {
    if (!products.length) {
      dispatch(fetchProducts());
    }
  }, [products.length, dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.title} - ${product.price}

        </li>
      ))}
    </ul>
  );
};

export default ProductList;
