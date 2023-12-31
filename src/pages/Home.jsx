import React from "react";
import { useProduct } from "../context/ProductProvider";
import ProductCard from "../components/ProductCard";
const Home = () => {
  const {
    state: { products, loading, error },
  } = useProduct();

  let content;
  if (loading) {
    content = <p>Loading</p>;
  }
  if (error) {
    content = <p>Something went wrong</p>;
  }

  if (!loading && !error && products.length === 0) {
    content = <p>Nothing to show</p>;
  }
  if (!loading && !error && products.length) {
    content = products.map((product) => (
      <ProductCard product={product} key={product._id} />
    ));
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10">
      {content}
    </div>
  );
};

export default Home;
