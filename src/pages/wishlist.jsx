import React from "react";
import { useCart } from "../context/CartContext";
import { ProductCard } from "../components/productCard";
import "./css files/wishlist.css";

export const Wishlist = () => {
  const { wishlist } = useCart();
  return (
    <div className="wishlist">
      <h1 className="wishlistHeading">Wishlist</h1>
      <div className="wishlistMain">
        {wishlist.map((product) => {
          return <ProductCard key={product.id} item={product} />;
        })}
      </div>
    </div>
  );
};
