import React from "react";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

const Home = () => {
  return (
    <div className="home">
      <h1>Products</h1>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;