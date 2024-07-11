import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../core/redux/feateres/crud/crudThunk"; // Adjust the import path accordingly

const DataFetcher = () => {
  const dispatch = useDispatch();
  const { loading, products, error } = useSelector((state) => state.products); // Adjust state selector for products

  useEffect(() => {
    // Fetch products from the API
    const fetchProductsFromAPI = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        console.log("Fetched products:", data); // Log fetched data to inspect structure
        dispatch(fetchProducts(data)); // Assuming fetchProducts action updates Redux state with fetched data
      } catch (error) {
        console.error("Error fetching products:", error);
        // Dispatch an action to set error state in Redux if needed
      }
    };

    fetchProductsFromAPI();
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!products || products.length === 0) return <div>No products available</div>;

  const cardStyle = {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    margin: "16px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "left",
    maxWidth: "300px",
  };

  const containerStyle = {
    flexGrow: "1",
    margin: "0 auto",
    alignItems: "center",
    textAlign: "center",
  };

  const sectionStyle = {
    marginBottom: "32px",
  };

  const cardContainerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  };

  return (
    <div style={containerStyle}>
      <h1>Fetched Products</h1>

      <div style={sectionStyle}>
        <div style={cardContainerStyle}>
          {products.map((product) => (
            <div key={product.id} style={cardStyle}>
              <img src={product.image} alt={product.title} style={{ width: "100%", height: "auto", marginBottom: "8px" }} />
              <div style={{ padding: "10px" }}>
                <h3>{product.title}</h3>
                <p>Price: ${product.price}</p>
                <p>{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DataFetcher;
