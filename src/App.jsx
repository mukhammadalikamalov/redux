import React, { useState } from "react";
import ProductForm from "./components/ProductForm"; // Adjust the import path accordingly
import ProductList from "./components/ProductList"; // Adjust the import path accordingly

const App = () => {
  const [currentId, setCurrentId] = useState(null);
  return (
    <>
      <ProductForm currentId={currentId} setCurrentId={setCurrentId} />
      <ProductList setCurrentId={setCurrentId} />
    </>
  );
};

export default App;
