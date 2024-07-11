import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, fetchProducts } from "../core/redux/feateres/crud/crudThunk" // Adjust the import path accordingly

const ProductForm = ({ currentId, setCurrentId }) => {
  const dispatch = useDispatch();
  const currentProduct = useSelector((state) =>
    state.products.products.find((product) => product.id === currentId)
  );
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (currentProduct) {
      setTitle(currentProduct.title);
      setPrice(currentProduct.price.toString()); // Assuming price is a string in the form input
      setDescription(currentProduct.description);
    }
  }, [currentProduct]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const productData = {
      title,
      price: parseFloat(price), // Convert price to a number
      description,
    };

    if (currentId) {
      dispatch(updateProduct({ id: currentId, ...productData }));
      setCurrentId(null);
    } else {
      dispatch(addProduct(productData));
    }

    setTitle("");
    setPrice("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>


    </form>
  );
};

export default ProductForm;
